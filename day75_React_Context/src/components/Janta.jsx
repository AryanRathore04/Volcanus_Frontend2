import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/MyContext'

const Janta = () => {
  // console.log(useContext(MyContext))
  const { data, money, name, product, counter, setcounter } =
    useContext(MyContext);
  useContext(MyContext)
  return (
    <>
      <h2>Janta = {data}</h2>
      <h2>Money = {money}</h2>
      <h2>Name = {name}</h2>
      <h2>Product = {product[0].title}</h2>
      <h3>Product = {product[1].title}</h3>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
      <button onClick={() => setcounter(counter - 1)}>decrease</button>
    </>
  );
}

export default Janta