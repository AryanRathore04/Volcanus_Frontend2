import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await api.json();
      setdata(data);
      console.log(data);
    };
    FetchData();
  }, []);

  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img style={{ width: "300px" }} src={item.url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchData;
