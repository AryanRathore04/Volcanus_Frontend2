import React from 'react'
import District from './District'

const StateGov = ({data}) => {
  return (
    <>
    <div>
      <h3>This is a State Component </h3>
      <District data={data} />
    </div>
    </>
  )
}

export default StateGov