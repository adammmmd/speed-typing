import React from 'react'
import useWordGame from './hooks/useWordGame'


function App() {
  const {inputRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount} = useWordGame()

  return (
    <div>
      <h1>How fast do you type</h1>
      <textarea ref={inputRef} onChange={handleChange} value={text} disabled={!isTimeRunning}></textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame()} disabled={isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  )
}

export default App
