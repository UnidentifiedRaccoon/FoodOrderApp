import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import { useCallback, useEffect, useMemo, useState } from "react";
import LoadingCircle from "../../UI/LoadingCircle/LoadingCircle";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import useHttp from "../../../hooks/use-http";

const URL = "https://foodorderapp-2a227-default-rtdb.firebaseio.com/menu.json";

const AvailableMeals = () => {
  const { isLoading, error, fetchData: fetchMenuData } = useHttp();
  const [meals, setMeals] = useState([]);

  const config = useMemo(() => {
    return {
      url: URL,
    };
  }, []);

  const processingData = useCallback((data) => {
    const dataArr = [];
    for (const key of Object.keys(data)) {
      dataArr.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        description: data[key].description,
      });
    }
    setMeals(dataArr);
  }, []);

  useEffect(() => {
    fetchMenuData(config, processingData);
  }, [fetchMenuData, config, processingData]);

  const mealsLit = meals.map((item) => {
    return (
      <MealItem
        key={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        id={item.id}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        {<ul>{mealsLit}</ul>}
        {error && (
          <ErrorMessage>
            <h3>{error.message}</h3>
            <span>
              Повторите попытку через минуту или обратитесь в службу поддержки
            </span>
          </ErrorMessage>
        )}
        {isLoading && !error && <LoadingCircle />}
      </Card>
    </section>
  );
};

export default AvailableMeals;
