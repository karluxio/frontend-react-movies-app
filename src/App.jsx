import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

export const App = () => {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => console.log(res));
  };

  return <div className="App">App</div>;
};
