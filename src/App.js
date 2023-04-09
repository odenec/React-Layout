import "./App.css"
import { Routes, Route } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import CoursesLoyout from "./Layouts/CourseLoyout"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contacts from "./components/Contacts.jsx"
import NotFound from "./components/NotFound.jsx"
import SingleCourse from "./components/course/SingleCourse"
import { useState } from "react"

function App() {
  const [not, setNot] = useState(true)
  const setStateNotTrue = () => {
    setNot(true)
  }
  const setStateNotFalse = () => {
    setNot(false)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout notEnd={not} />}>
          <Route index element={<Home not={setStateNotTrue} />} />
          {
            //index true = index
          }
          <Route
            path="/courses"
            element={<CoursesLoyout not={setStateNotTrue} />}>
            <Route
              path=":slug/"
              element={<SingleCourse not={setStateNotTrue} />}
            />
          </Route>
          <Route path="about" element={<About not={setStateNotTrue} />} />
          <Route path="contacts" element={<Contacts not={setStateNotTrue} />} />
          <Route path="*" element={<NotFound not={setStateNotFalse} />} />
        </Route>
      </Routes>

      {console.log()}
      {console.log()}
    </div>
  )
}

export default App
