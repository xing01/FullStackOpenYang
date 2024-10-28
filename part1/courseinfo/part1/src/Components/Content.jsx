import Part from './Part'
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
    return (

        <div>
            <Part name={part1.name} exercises={part1.exercises} />
            <Part name={part2.name} exercises={part2.exercises} />
            <Part name={part3.name} exercises={part2.exercises} />
        </div>


    )
}

export default Content