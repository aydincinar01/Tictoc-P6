import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';

const Square = (props) => {
  const {handleChange } = useContext(AppContext);
  return (
    <div
      className={"square" + (props.isWinning  ? " active" : "")}
      // className='square'
      onClick={() => {
        handleChange(`${props.index}`)
      }}
    >
      {props.value}
    </div>
  )
}

export default Square
