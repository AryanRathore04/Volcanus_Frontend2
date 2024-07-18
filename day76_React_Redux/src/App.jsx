import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementBy100,
  incrementByAmount,
} from "./redux/CounterSlice";

const App = () => {


  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  
  return (
    <>
      <h1>value = {count.value}</h1>
      <h1>count = {count.count}</h1>
      <h1>name = {count.name}</h1>
      <h1>{count.product[0].name}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy100())}>Increment by 100</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>

    </>
  ); 
};

export default App;
