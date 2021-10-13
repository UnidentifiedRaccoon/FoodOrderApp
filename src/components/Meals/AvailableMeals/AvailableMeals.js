import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
const DUMMY_MEALS_MENU = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsLit = DUMMY_MEALS_MENU.map((item) => {
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
        <ul>{mealsLit}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
