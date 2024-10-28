import { useState } from 'react'
import Button from './Components/Button'
import Statistics from './Components/Statistics'

const App = () => {
  // Estado para cada tipo de comentario
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Calcular el total de comentarios
  const total = good + neutral + bad
  // Calcular el porcentaje de comentarios positivos
  const positivePercentage = total === 0 ? 0 : (good / total) * 100
  // Calcular el promedio
  const average = total === 0 ? 0 : (good - bad) / total

  return (
    <div>
      <h1>Give feedback</h1>
      {/* Botones para registrar comentarios */}
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />

      {/* Mostrar estadísticas */}
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          average={average} 
          positivePercentage={positivePercentage} 
        />
      )}
    </div>
  )
}

export default App
