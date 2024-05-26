import { Bottombar } from "@/components/bottombar"
import { Sidebar } from "@/components/sidebar"
import { useUser } from "@/features/auth/hooks/use-user";
import { Outlet } from "react-router-dom"
import { Home, User } from "lucide-react"

export type navLinkType = {
  title: string;
  to: string;
  icon: React.ReactNode;
}

export const Layout = () => {
  const { data: loginUser } = useUser();

  const navLinks: navLinkType[] = [
    {
      title: "ホーム",
      to: "/",
      icon: <Home className="me-2" />
    },
    {
      title: "プロフィール",
      to: `/users/${loginUser?.id}`,
      icon: <User className="me-2" />
    }
  ]

  return loginUser && (
    <div>
      <div className="hidden sm:block">
        <Sidebar loginUser={loginUser} navLinks={navLinks} />
      </div>
      <div className="block sm:hidden">
        <Bottombar loginUser={loginUser} navLinks={navLinks} />
      </div>
      <div className="px-4 py-2 sm:ml-[280px] sm:w-[600px]">
        <Outlet />
      </div>
    </div>
  )
}