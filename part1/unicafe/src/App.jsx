import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({ text, value }) => (
  <div>{text} {value}</div>
)
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
    </>
  )
}


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
  const positive = good * 100 / total
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App