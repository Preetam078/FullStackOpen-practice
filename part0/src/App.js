import { useState } from 'react';
import './App.css';

// const Display = ({message}) => {
//   return (
//     <div>
//       {message}
//     </div>
//   )
// }

// const Button = ({handleClick, message}) => {
//   return (
//     <button onClick={handleClick}>
//       {message}
//     </button>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => {
//     setCounter(counter+1);
//   }

//   const setCounterZero = () => {
//     setCounter(0);
//   }

//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//   }

//   return (
//     <>
//     <Display message={counter}/>
//     <Button handleClick={increaseByOne} message={'plus'}/>
//     <Button handleClick={decreaseByOne} message={'minus'}/>
//     <Button handleClick={setCounterZero} message={'zero'}/>
//     </>
//   )
// }

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  let InitailState = {
    left:0,
    right:0
  };
  const [click, setClick] = useState(InitailState);

  const handleLeftClick = () => {
    const newClick = {
      ...click,
      left:click.left+1
    }
    setClick(newClick);
  }

  const handleRightClick = () => {
    const newClick = {
      ...click,
      right:click.right+1
    }
    setClick(newClick);
  }

  return (
    <div>
      {click.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {click.right}
    </div>
  )
}
 export default App
