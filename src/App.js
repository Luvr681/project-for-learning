import { useState } from 'react'

import { Question } from './components/Question'
import { End } from './components/End'
import { questions } from './storage/questions'
import { links } from './storage/links'

import './index.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [question, setQuestion] = useState(questions.filter(question => question.id === counter)[0])
  const [result, setResult] = useState([])
  const [link, setLink] = useState({ link: '' })

  function handleQuestion(value) {
    const newCounter = counter + 1;
    setQuestion(questions.filter(question => question.id === newCounter)[0])
    setCounter(newCounter)

    if (newCounter >= 5) {
      setLink(links.filter(link => link.value === value)[0] || { link: 'https://google.com' })
    }
  }

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="header__title">Пожалуйста, пройдите короткое тестирование для опрредление ваших уникальных черт</h1>
        </header>
        <div className="questions">
          {
            counter < 5  
            ? <Question question={question} changeQuestion={handleQuestion} result={result} setResult={setResult} />
            : <End link={link} />
          }
        </div>
      </div>
    </div>
  )
}

export default App
