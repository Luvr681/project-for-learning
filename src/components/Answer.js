import React from 'react'

export const Answer = ({ answer, changeQuestion, result, setResult }) => {
  const handleResult = () => {
    changeQuestion(answer.name)
    setResult([...result, answer.name])
  }

  return (
    <button onClick={handleResult} className="answer">{ answer.name }</button>
  )
}
