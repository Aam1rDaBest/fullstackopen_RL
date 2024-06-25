import { useState } from 'react'

const Display = props => (
  <div>{props.text} {props.value}</div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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

      <h1>statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={good + bad + neutral} />
      <Display text="average" value={(good - bad) / (good + bad + neutral)} />
      <Display text="positive" value={((good / (good + neutral + bad)) * 100) + " %"} />
    </div>
  )
}

export default App