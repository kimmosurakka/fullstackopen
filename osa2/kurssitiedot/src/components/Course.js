import Header from "./Header"
import Content from "./Content"

const Course = ({course}) => (
    <div>
      <Header text={course.name} />
      <Content course={course} />
    </div>
)

export default Course