// import { useEffect } from "react"
import { NavLink, useLocation, useParams } from "react-router-dom"
import courses from "../../data/courses"
import NotFoundCource from "../NotFoundCourse"
import styles from "./Coure.module.css"

const SingleCourse = () => {
  const locate = useLocation()
  const { slug } = useParams()
  //Название берётся из app файла после :
  // const navigate = useNavigate()
  // let all = courses.filter((el) => slug === el.slug)
  let getSlug =
    slug === courses[0].slug
      ? true
      : slug === courses[1].slug
      ? true
      : slug === courses[2].slug
      ? true
      : slug === courses[3].slug
      ? true
      : false

  const all = courses.find((el) => el.slug === slug)

  //finde вытаскивает object
  const blueColor = {
    backgroundColor: "blue",
    color: "white",
    transition: "all 0.3s",
  }
  const yelowColor = {
    backgroundColor: "yellow",
    color: "black",
  }
  const greenColor = {
    backgroundColor: "green",
    color: "white",
  }
  const darcColor = {
    backgroundColor: "darkblue",
    color: "white",
  }
  const blackColor = {
    backgroundColor: "black",
    color: "white",
  }
  const blackColorRef = { color: "white" }
  const styleCourse = !all
    ? blackColor
    : all.slug === "react"
    ? blueColor
    : all.slug === "javascript"
    ? yelowColor
    : all.slug === "node-js"
    ? greenColor
    : all.slug === "python"
    ? darcColor
    : {}
  const styleCourseRef = !all
    ? blackColorRef
    : all.slug === "react"
    ? blueColor
    : all.slug === "javascript"
    ? yelowColor
    : all.slug === "node-js"
    ? greenColor
    : all.slug === "python"
    ? darcColor
    : {}
  // useEffect(() => {
  //   if (!getSlug) {
  //     navigate("..", { relative: "path" })
  //   }
  // }, [getSlug, navigate])

  return (
    <div className={` ${!getSlug ? styles.courseOne : styles.courseOneHight} `}>
      <div
        className={` ${
          locate.pathname > "/courses/" && getSlug
            ? styles.courseOne
            : styles.courseNot
        }`}
        style={styleCourse}>
        {getSlug && <h2 className={styles.h3}>{all && all.title}</h2>}
        {!getSlug && <NotFoundCource />}

        <NavLink
          to=".."
          relative="path"
          //обрати внимание!
          end
          className={styles.link}
          style={styleCourseRef}>
          All Courses
        </NavLink>
      </div>
      {locate.pathname > "/courses/" && getSlug && (
        <div>
          <p className={styles.discribe}>{all && all.discribe}</p>
        </div>
      )}
    </div>
  )
}
export default SingleCourse
