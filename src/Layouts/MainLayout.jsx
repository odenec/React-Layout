import { Outlet } from "react-router-dom"
import MenuNav from "../components/MenuNav"

import { Footer } from "../components/Footer"

const MainLayout = ({ notEnd }) => {
  return (
    <div>
      <MenuNav />

      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}>
        <div
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
          }}>
          <Outlet />
        </div>
        {notEnd && <Footer />}
      </div>
    </div>
  )
}
export default MainLayout
