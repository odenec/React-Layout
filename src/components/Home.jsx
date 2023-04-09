import { useEffect } from "react"
import styles from "./home.module.css"
const Home = ({ not }) => {
  useEffect(() => not(), [not])
  return (
    <>
      <h1>Home</h1>
      <hr></hr>
      <h1 style={{ margin: "50px" }}>Welcom to my study project</h1>
      <div className={styles.container}>
        <div className={styles.containerPicture}>
          <div className={styles.picture1}>
            <h2 style={{ color: "black", padding: "50px" }}>
              Donec ac lorem vel velit rhoncus finibus.
            </h2>
          </div>
          <div className={styles.picture2}>
            <h2 style={{ color: "black", padding: "50px" }}>
              Nam lectus augue, vehicula eget elit id.
            </h2>
          </div>
        </div>
        <p
          style={{
            margin: "50px 25px",
            textIndent: "40px",
            fontSize: "40px",
          }}>
          Nam vel felis at felis faucibus laoreet eu ut nunc. Curabitur
          dignissim elit at erat gravida fringilla. Maecenas imperdiet tellus
          quis est fermentum, sit amet iaculis justo posuere. Aliquam ante
          velit, elementum in sagittis eu, porttitor et est. Proin et neque
          convallis, semper lorem vitae, dignissim erat. Phasellus tellus magna,
          porta eget sem ac, facilisis semper massa. Integer sed sapien a magna
          mollis egestas a eu sapien. Phasellus sagittis consequat arcu, eget
          efficitur ante consequat vulputate. Suspendisse potenti. Cras euismod,
          augue id pellentesque blandit, erat augue consectetur est, ac interdum
          tellus magna sit amet lorem. Maecenas orci ex, accumsan et ex a,
          egestas efficitur odio. Mauris porta maximus dui, suscipit lobortis
          arcu pretium quis. Aliquam dignissim odio ac ipsum finibus egestas.
          Nulla consequat aliquet lacinia. Curabitur felis quam, facilisis
          laoreet suscipit sed, finibus ut arcu. Pellentesque dictum, sapien id
          mollis varius, est libero commodo elit, quis tempor eros leo nec
          justo. Pellentesque placerat sapien sed enim congue semper non ut
          libero. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Suspendisse non nisi nisl. Donec rhoncus metus
          mi, vel malesuada lacus dictum in. In vel pellentesque risus. Quisque
          id congue nulla, eu finibus eros. Phasellus vitae mauris semper,
          mollis magna id, tincidunt dolor.
        </p>
      </div>
    </>
  )
}

export default Home
