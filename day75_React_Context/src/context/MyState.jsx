import React, { useState } from 'react'
import MyContext from './MyContext'

const MyState = (props) => {
    const money = 1000;
     const data = "10";
     const name = "Aryan";
     const product = [{id:1,title:'Mobile'},{id:2,title:'Laptop'},{id:3,title:'Tablet'}]
     const [counter, setcounter] = useState(0)
  return (
    <MyContext.Provider
      value={{ data, money, name, product, counter, setcounter }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState