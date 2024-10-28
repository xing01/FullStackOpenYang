import StatisticLine from './StatisticsLine'

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average.toFixed(2)} />
      <StatisticLine text="Positive feedback" value={`${positivePercentage.toFixed(2)} %`} />
    </div>
  )
}

export default Statistics
