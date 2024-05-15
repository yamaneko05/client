import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-[280px] px-4 w-[600px]">
        <Outlet />
      </div>
    </div>
  )
}