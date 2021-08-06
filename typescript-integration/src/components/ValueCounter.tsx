import React from 'react'

interface IValueCounterProps{
  counter: number
}

//Criando um componente baseado em função (ou componente funcional)
export default (props: IValueCounterProps) => {
  return (
    <p>{props.counter}</p>
  )
}