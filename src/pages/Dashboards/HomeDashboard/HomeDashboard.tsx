import { Outlet } from "react-router-dom"
import HeaderDashboard from "../HeaderDashboard/HeaderDashboard"



const HomeDashboard:React.FC = () => {
  return (
    <>
        <HeaderDashboard/>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
    </>
  )
}

export default HomeDashboard