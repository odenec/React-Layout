import { useEffect } from "react"
import { Link } from "react-router-dom"

const NotFound = ({ not }) => {
  useEffect(() => not())
  console.log(not)

  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">Go to home</Link>
    </div>
  )
}

export default NotFound
