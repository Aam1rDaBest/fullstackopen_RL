import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialVotes = {}
  anecdotes.forEach((anecdote, index) => {
    initialVotes[index] = 0
  })

  const [votes, setVotes] = useState(initialVotes);
  const [selected, setSelected] = useState(0)

  const handleVote = () => {
    const updatedVotes = { ...votes }
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const mostVotes = Object.keys(votes).reduce((maxAnecdote, currentAnecdote) => {
    return votes[currentAnecdote] > votes[maxAnecdote] ? currentAnecdote : maxAnecdote
  }, 0)

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdotes</button>

      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
    </div>
  )
}

export default App