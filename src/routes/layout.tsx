import { Bottombar } from "@/components/bottombar"
import { Sidebar } from "@/components/sidebar"
import { useUser } from "@/features/auth/hooks/use-user";
import { Outlet } from "react-router-dom"

export const Layout = () => {
  const { data: loginUser } = useUser();

  return loginUser && (
    <div>
      <div className="hidden sm:block">
        <Sidebar loginUser={loginUser} />
      </div>
      <div className="block sm:hidden">
        <Bottombar loginUser={loginUser} />
      </div>
      <div className="px-4 py-2 sm:ml-[280px] sm:w-[600px]">
        <Outlet />
      </div>
    </div>
  )
}