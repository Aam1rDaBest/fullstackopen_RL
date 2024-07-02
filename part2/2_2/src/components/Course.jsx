const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Header = ({ course_n }) => <h1>{course_n}</h1>

const Total = ({ parts_t }) => {
    const Result = parts_t.reduce((total, part) => {
        return total + part.exercises
    }, 0)
    return (
        <h4>total of {Result} exercises</h4>
    )
}

const Content = ({ parts }) => {
    return (
        parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <Header course_n={course.name} />
            <Content parts={course.parts} />
            <Total parts_t={course.parts} />
        </div>
    )
}

export default Course