import React from "react"

function useWordGame(startingTime = 10) {
    const [text, setText] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(startingTime)
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
      setTimeRemaining(startingTime)
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

    return {inputRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame

