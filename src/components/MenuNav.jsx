import { NavLink, useLocation } from "react-router-dom"
import styles from "./nav.module.css"
import { useState } from "react"

const MenuNav = (props) => {
  let locete = useLocation()
  const [downBar, setDownBar] = useState(false)
  const setDownBarTrue = () => {
    setDownBar(true)
  }

  return (
    <>
      <nav className={`${styles.nav} `}>
        <h3 className={styles.navH3}>NAVIGATION</h3>
        <NavLink
          onClick={() => setDownBarTrue()}
          className={`${({ isActive }) => (isActive ? "activeLink" : "link")} ${
            styles.navText
          }`}
          end
          to="/">
          Home
        </NavLink>
        {
          //end чтобы активная ссылка не висла на home
          //props - isActive = bulean. according to peak style
        }
        <NavLink
          onClick={() => setDownBarTrue()}
          className={`${styles.navText}`}
          to="/courses">
          Courses
        </NavLink>
        <NavLink
          onClick={() => setDownBarTrue()}
          className={`${styles.navText}`}
          to="/about">
          About
        </NavLink>
        <NavLink
          onClick={() => setDownBarTrue()}
          className={`${styles.navText}`}
          to="/contacts">
          Contacts
        </NavLink>
        <nav
          style={
            downBar || locete.pathname >= "/courses" ? {} : { display: "none " }
          }
          className={`${styles.nav2} ${
            locete.pathname >= "/courses" ? {} : styles.animationBottonBar
          }`}>
          <h3 className={styles.navH32}>SORT</h3>
          <NavLink
            className={`${styles.navText2}`}
            style={
              locete.search === "?sort=title" ? { color: "lawngreen" } : {}
            }
            to="/courses?sort=title">
            Title
          </NavLink>
          <NavLink
            className={`${styles.navText2}`}
            style={locete.search === "?sort=slug" ? { color: "lawngreen" } : {}}
            to="/courses?sort=slug">
            Slug
          </NavLink>
          <NavLink
            className={`${styles.navText2}`}
            style={locete.search === "?sort=id" ? { color: "lawngreen" } : {}}
            to="/courses?sort=id">
            Id
          </NavLink>
          <NavLink
            className={`${styles.navText2}`}
            style={!locete.search ? { color: "lawngreen" } : {}}
            to="/courses">
            None
          </NavLink>
        </nav>
      </nav>
    </>
  )
}

export default MenuNav
