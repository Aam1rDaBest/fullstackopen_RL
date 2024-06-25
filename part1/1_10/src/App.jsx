import { useState } from 'react'

const Display = props => (
  <div>{props.text} {props.value}</div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return <Display text={props.text} value={props.value} />
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handles functionality of button presses (could be handled within handleClick as alternative)
  const handleGoodPress = good => setGood(good + 1)
  const handleNeutralPress = neutral => setNeutral(neutral + 1)
  const handleBadPress = bad => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGoodPress(good)} text="good" />
      <Button handleClick={() => handleNeutralPress(neutral)} text="neutral" />
      <Button handleClick={() => handleBadPress(bad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App