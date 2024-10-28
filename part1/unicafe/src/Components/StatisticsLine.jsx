//Componente individual para cada línea de estadistica
const StatisticLine = ({ text, value }) => {
    return (
        <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  
  export default StatisticLine
  