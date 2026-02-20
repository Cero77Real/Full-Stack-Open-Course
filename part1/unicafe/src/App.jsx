import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = ({ text, value }) => (
  <div>{text} {value}</div>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Without consolo.log
  //const incrementNeutral = () => setNeutral(neutral + 1)

  const incrementNeutral = () => {
    const newNeutral = neutral + 1
    console.log("neutral value now: ", newNeutral)
    setNeutral(newNeutral)
  }
  const incrementGood = () => {
    const newGood = good + 1
    console.log("good value now: ", newGood)
    setGood(newGood)
  }
  const incrementBad = () => {
    const newBad = bad + 1
    console.log("bad value now: ", newBad)
    setBad(newBad)
  }
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good * 100 /total
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={total} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={positive +" %"} />
    </div>
  )
}

export default App