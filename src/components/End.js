import React from 'react'

export const End = ({ link }) => {
  console.log('Link:', link)
  return (
    <div className='end'>
      <h3 className='end__title'>Благодарим вас!</h3>
      <h3 className='end__title'>Это была вводная часть. Теперь позвольте оценить ваши знания в вашей области, пройдя небольшой тест.</h3>
      <a className='end__button' href={link.link}>Перейти к выполнению</a>
    </div>
  )
}