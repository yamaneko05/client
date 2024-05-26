import { SidebarMenu } from "@/components/sidebar-menu"
import { Icon } from "@/features/users/components/icon"
import { UserType } from "@/features/users/types"
import { NavLink } from "react-router-dom"
import { Home, User } from "lucide-react"

export const Bottombar = ({loginUser}: {
  loginUser: UserType,
}) => {
  const navLinks = [
    {
      to: "/",
      icon: <Home size={24} />
    },
    {
      to: `/users/${loginUser?.id}`,
      icon: <User size={24} />
    }
  ]

  return (
    <div className="fixed bottom-0 w-full px-2 h-[60px] bg-white border-t flex justify-around items-center">
      {navLinks.map((navLink, index) => (
        <NavLink to={navLink.to} key={index} className="p-3">
          {navLink.icon}
        </NavLink>
      ))}
      <div className="shrink-0">
        <SidebarMenu>
          <div className="p-2">
            <Icon icon_file={loginUser.icon_file} className="w-8 h-8" />
          </div>
        </SidebarMenu>
      </div>
    </div>
  )
}