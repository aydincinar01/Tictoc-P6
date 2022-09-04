import { useEffect, useState } from 'react';
import Game from './components/Game';
import { AppContext } from './contexts/AppContext';
import CheckWinner from './utils/CheckWinner';

function App() {

  const [state, setState] = useState({
    squares: Array(9).fill(null),
    isNext: false,
    winningSquares: [],
  });

  useEffect(()=>{
    console.log("You win!");
  },[state.winningSquares]);

  const handleChange = (i) => {
    const squares = state.squares.slice();
    const winner = CheckWinner(squares);
    winner&& setState( {...state, winningSquares: [...winner.line]});
    if(winner || squares[i]) return
    squares[i] = state.isNext ? 'X' : 'O';
    setState({...state, squares: squares, isNext: !state.isNext });
  }

  return (
    <AppContext.Provider value={{ state: state, handleChange: handleChange }}>
      <div className="game">
        <Game />
      </div>
    </AppContext.Provider>
  );
}

export default App;