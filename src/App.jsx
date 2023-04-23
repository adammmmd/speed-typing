import React from 'react'


function App() {
  const [text, setText] = React.useState("")
  const [timeRemaining, setTimeRemaining] = React.useState(5)
  const [isTimeRunning, setTImeRunning] = React.useState(false)
  const [wordCount, setWordCount] = React.useState(0)
  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  React.useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      setTImeRunning(false)
      const numWords = calculateWordCount(text)
      setWordCount(numWords)
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>How fast do you type</h1>
      <textarea onChange={handleChange} value={text}></textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setTImeRunning(true)}>Start</button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  )
}

export default App
