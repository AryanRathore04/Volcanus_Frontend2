import React from 'react'
import Panchayat from './Panchayat'

const Block = ({data}) => {
  return (
    <>
    <div>
      <h5>This is Block Component </h5>
      <Panchayat data= {data} />
    </div>
    </>
  )
}

export default Block