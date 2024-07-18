import React, { useState } from "react";

const Product = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Orange",
      imgSrc:
        "https://5.imimg.com/data5/EE/ER/MY-27568370/fresh-orange-500x500.png",
      price: 20,
    },
    {
      id: 2,
      title: "Apple",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg",
      price: 30,
    },
    {
      id: 3,
      title: "Banana",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",
      price: 40,
    },
  ]);
  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img style={{width: "300px"}} src={item.imgSrc} alt="" />
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
