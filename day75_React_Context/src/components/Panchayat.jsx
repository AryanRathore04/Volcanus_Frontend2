import React from 'react'
import Janta from './Janta'
const Panchayat = ({data}) => {
  return (
    <>
    <div>
      <h6>This is Panchayat Component</h6>
      <Janta data={data} />
    </div>
    </>
  )
}

export default Panchayat