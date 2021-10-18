import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = useCallback(async (config, dataProcessing) => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) {
        throw new Error("Ошибка запроса к базе данных");
      }
      const data = await response.json();
      if (dataProcessing !== null) {
        dataProcessing(data);
      }
    } catch (error) {
      console.log(error);
      setError({ message: error.message });
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, fetchData };
};

export default useHttp;
