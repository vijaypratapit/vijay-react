/** @format */

import { useEffect, useState } from "react";

/** @format */
const useUserDetails = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    setInfo(json);
  };
  return { data: info, error: "data is not found" };
};

export default useUserDetails;
