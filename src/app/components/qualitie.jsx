import React from 'react'

const Qualiti = (props) => {
  return (
    <>
      <span className={'badge m-1 bg-' + props.colors}>{props.name}</span>
    </>
  )
}

export default Qualiti
