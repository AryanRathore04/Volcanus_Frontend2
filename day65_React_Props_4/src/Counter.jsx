import React,{useState} from 'react'

const Counter = () => {

    const [counter, setcounter] = useState(0)
    // let counter = 0;
    const increment = () => {
        setcounter(counter + 1)
        // counter++;
        // document.getElementsByTagName("h1")[0].innerText = counter;
    }

    const decrement = () => {
        setcounter(counter - 1)
        // counter--;
        // console.log(counter);
        // document.getElementsByTagName("h1")[0].innerText = counter;
    }
    document.h1
  return (
    <div>
        <h1>{counter}</h1>
        
        <button onClick={increment}>Increase by 1</button>
        <button onClick={decrement}>Decrease by 1</button>
    </div>
  )
}

export default Counter