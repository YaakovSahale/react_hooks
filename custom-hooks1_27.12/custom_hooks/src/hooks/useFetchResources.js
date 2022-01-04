import { useState, useEffect } from "react";

export default function useFetchResources(resource) {
  const [resources, setResources] = useState([]);

  useEffect(() => getResources(), []);

  const getResources = () => {
    const URL = `https://jsonplaceholder.typicode.com/${resource}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error(err));
  };

  return resources;
}
