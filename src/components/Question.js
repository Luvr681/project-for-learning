import React from 'react'

import { Answer } from './Answer'

export const Question = ({ question, changeQuestion, setResult, result }) => {
  return (
    <div>
      <h2 className="question__title">{ question?.title }</h2>
      {
        question?.answers && question?.answers.map((ans, idx) => {
          return <Answer result={result} setResult={setResult} answer={ans} key={idx} changeQuestion={changeQuestion} />
        })
      }
    </div>
  )
}
