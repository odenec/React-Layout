import { Outlet } from "react-router-dom"
import { useEffect } from "react"

import Courses from "../components/Courses"
import styles from "./CourseLoyout.module.css"

const CourseLoyout = ({ not }) => {
  useEffect(() => not(), [not])
  return (
    <>
      <Courses />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}
export default CourseLoyout
