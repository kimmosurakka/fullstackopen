const Total = ({ course }) => (
  <div><b>
    Total of {course.parts.reduce((sum, part) =>
      sum + part.exercises, 0
    )} exercises
  </b></div>
)

export default Total