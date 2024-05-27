import { Bottombar } from "@/components/bottombar"
import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Bottombar />
      <div className="px-4 py-2 pb-[calc(60px+0.5rem)] sm:ml-[280px] sm:w-[600px]">
        <Outlet />
      </div>
    </div>
  )
}