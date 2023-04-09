import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { NavLink } from "react-router-dom"
import styles from "./course.module.css"
import courses from "../data/courses"
import { useEffect, useState } from "react"

const SORT_KEYS = Object.keys(courses[0]).filter((el) => el !== "discribe")

const Courses = () => {
  const navigate = useNavigate()
  const sortCourses = (courses, key) => {
    const sortedCourses = [...courses]
    //INCLUDES
    if (!key || !SORT_KEYS.includes(key)) {
      return sortedCourses
    }

    //сортировка!!!!
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
    return sortedCourses
  }
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey) && location.pathname < "/courses/") {
      //переходит на туже страницу, что и есть
      navigate(".")
      setSortKey(undefined)
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate, location.pathname])

  //тут внимательно! изучи код
  useEffect(() => setSortKey(query.sort), [query.sort])
  useEffect(() => setSortedCourses(sortCourses(courses, sortKey)), [sortKey])
  console.log(sortKey)

  const setTitleLink = (key) => {
    if (key === "id") {
      const idNav = sortedCourses.map((el, id) => (
        <NavLink className={styles.textObject} key={id} to={el.slug}>
          {`${el.title} ID: ${el.id}`}
        </NavLink>
      ))
      return idNav
    }

    if (key === "slug") {
      const slugNav = sortedCourses.map((el, id) => (
        <NavLink className={styles.textObject} key={id} to={el.slug}>
          {`${el.title} SLUG: ${el.slug}`}
        </NavLink>
      ))

      return slugNav
    } else {
      const elseNav = sortedCourses.map((el, id) => (
        <NavLink className={styles.textObject} key={id} to={el.slug}>
          {el.title}
        </NavLink>
      ))
      return elseNav
    }
  }
  return (
    <>
      <div className={styles.header}>
        <h1>{sortKey ? `Corses sorted by ${sortKey}` : "Corses"}</h1>
        <hr />
      </div>
      <div
        className={styles.containerRefDiv}
        style={
          location.pathname < "/courses/"
            ? { marginTop: "50px" }
            : { marginTop: "0px" }
        }>
        {location.pathname < "/courses/" && (
          <div className={styles.containerCouresRef}>
            {setTitleLink(sortKey)}
          </div>
        )}
        {location.pathname < "/courses/" && (
          <div
            className={
              location.pathname > "/courses" ? {} : styles.course
            }></div>
        )}
      </div>
    </>
  )
}
export default Courses
