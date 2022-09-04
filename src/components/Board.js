import React, { useContext } from 'react'
import Square from './Square'
import { AppContext } from '../contexts/AppContext';

const Board = () => {

  const { state } = useContext(AppContext);
   
  return (
    <>
      <div className='board' >
        {state.squares.map((item, i) => (
          < Square
            key={i}
            index={i}
            value={item}  
            isWinning={state.winningSquares.includes(i)?true:false}          
          />
        ))}
      </div>
    </>
  )
}

export default Board
