import { useEffect } from "react"
import styles from "./About.module.css"

const About = ({ not }) => {
  useEffect(() => not(), [not])
  return (
    <>
      <div>
        <h1>About</h1>
        <hr></hr>
      </div>

      <div className={styles.container}>
        <p className={styles.text}>
          За основу проекта взят курс Богдана Ставщука по React Router.
        </p>
        <p className={styles.text}>
          Проект демонстрирует моё понимение принципов работы React, JS, Css,
          Flexbox
        </p>
        <p className={styles.text}>
          Практически весь код полностью отличается, от изложенного в курсе.
          Осталась только идея роутинга и сортировок.
        </p>

        <p className={styles.text} style={{ marginBottom: "50px" }}>
          Добавленно множество анимаций, одинаковые отступы по всем страницам,
          дополнительный бар в курсах для сортировки с эфектом активной ссылки.
          Добавлен и прибит footer. Реализован адаптивный дизайн при изменении
          ширины окна. Дизайн сайта так же собственный.
        </p>

        <hr></hr>
        <p className={styles.text} style={{ marginTop: "50px" }}>
          Suspendisse potenti. Cras venenatis vel elit ac iaculis. Praesent sit
          amet vulputate lacus, id suscipit nisl. Sed mollis sodales velit, at
          euismod quam maximus a. Quisque auctor velit metus. Aenean
          pellentesque consectetur mi, ut pretium mi sagittis nec. Donec ex mi,
          mollis a purus nec, pellentesque dignissim mi. Donec eu ultricies
          purus, a congue nisl.
        </p>

        <p className={styles.text}>
          Donec vulputate interdum erat, vel tristique odio ornare id. Phasellus
          porta eleifend vestibulum. In nulla felis, accumsan ac turpis quis,
          pulvinar blandit nulla. Nam vitae odio cursus, tincidunt justo sit
          amet, blandit leo. Vivamus quis turpis eu felis aliquam semper.
          Vestibulum vestibulum enim risus, vitae facilisis augue tempor at.
          Cras vel elit tempor, pulvinar nisl nec, hendrerit ex. Donec interdum
          ullamcorper interdum. Nam tempus suscipit feugiat. Suspendisse
          potenti. Duis sem ligula, convallis non facilisis quis, eleifend non
          orci. Nullam laoreet ac ligula ut ultrices.
        </p>

        <p className={styles.text}>
          In hac habitasse platea dictumst. Nulla gravida scelerisque lacinia.
          Praesent vitae leo pulvinar, vehicula turpis non, tempor nisi. Nullam
          dolor dui, porta nec dictum sit amet, imperdiet in nisl. Proin
          faucibus vestibulum eros a semper. Curabitur sed justo cursus,
          fermentum enim commodo, facilisis lectus. In quis feugiat lorem. In
          hac habitasse platea dictumst. Mauris ac odio at est auctor aliquam.
          In purus lorem, commodo eleifend ipsum eget, convallis lobortis nisi.
          Aliquam sit amet blandit libero. Curabitur dictum placerat nibh non
          bibendum.
        </p>
        <p className={styles.text}>
          Mauris varius lacinia varius. Sed hendrerit purus quis ex aliquam
          venenatis. Donec lobortis iaculis lectus, in varius lacus condimentum
          faucibus. Cras ultrices lorem id tellus pharetra, et consequat purus
          pellentesque. Morbi in purus mi. Quisque cursus rutrum lacus quis
          luctus. Maecenas malesuada a ante ac gravida. Cras in nunc a nulla
          sollicitudin cursus in eu nulla.
        </p>
      </div>
    </>
  )
}
export default About
