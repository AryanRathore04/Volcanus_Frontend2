import React from 'react'
import IndianGov from './components/IndianGov'

const App = () => {
  const data = "10";
  return (
    <>
    <div>
      <h1>This is App Component</h1>
      <IndianGov data ={data} />
    </div>
    </>
  )
}

export default App