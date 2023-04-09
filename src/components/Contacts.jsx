import { useEffect } from "react"
import styles from "./Contacts.module.css"
const Contacts = ({ not }) => {
  useEffect(() => not(), [not])
  return (
    <>
      <>
        <h1>Contacts</h1>
        <hr></hr>
        <div className={styles.container}>
          <h1 className={styles.number}>+7-777-777-27-??</h1>
        </div>
      </>
    </>
  )
}

export default Contacts
