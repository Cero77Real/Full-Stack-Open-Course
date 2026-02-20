import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({ text, value }) => (
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
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
    </div>
  )
}

export default App