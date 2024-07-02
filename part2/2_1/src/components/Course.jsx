const Part = ({ name, exercises }) => {
    return (
        <li>
            {name} {exercises}
        </li>
    )
}

const Header = ({ course_n }) => <h1>{course_n}</h1>

const Content = ({ parts }) => {
    return (
        <ul>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </ul>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course_n={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course