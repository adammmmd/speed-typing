import React from 'react'


function App() {

  const [text, setText] = React.useState("")
  const [timeRemaining, setTimeRemaining] = React.useState(5)
  const [isTimeRunning, setTimeRunning] = React.useState(false)
  const [wordCount, setWordCount] = React.useState(0)
  const inputRef = React.useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setTimeRemaining(5)
    setTimeRunning(true)
    setText("")
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  function endGame() {
    setTimeRunning(false)
      const numWords = calculateWordCount(text)
      setWordCount(numWords)
  }

  React.useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

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
