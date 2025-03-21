import React, { useEffect, useState } from "react";

const Loading = () => {
  const [Fetch, setFetch] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch gender");
        }
        const data = await response.json();
        setFetch(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    fetchAPI();
  }, []);
  return (
    <>
      {load && <p>Loading...</p>}
      {Fetch && <p> {`${Fetch?.title}`}</p>}
    </>
  );
};

export default Loading;
