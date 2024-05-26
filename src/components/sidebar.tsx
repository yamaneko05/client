import { SidebarMenu } from "@/components/sidebar-menu"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icon } from "@/features/users/components/icon"
import { UserType } from "@/features/users/types"
import { cn } from "@/lib/utils"
import { navLinkType } from "@/routes/layout"
import { Link, NavLink } from "react-router-dom"

export const Sidebar = ({loginUser, navLinks}: {
  loginUser: UserType,
  navLinks: navLinkType[]
}) => {
  return (
    <div className="fixed top-0 h-screen w-[280px] border-r px-2 py-4 flex flex-col justify-between">
      <div className="">
        <div className="text-3xl font-semibold mb-8">
          <Link to="/">Biography5</Link>
        </div>
        <div className="space-y-4">
          {navLinks.map((navLink, index) => (
            <NavLink to={navLink.to} key={index} className={({isActive}) => buttonVariants({
              variant: "link",
              className: cn(["!justify-normal w-full text-xl", isActive ? "font-bold underline" : "font-normal"])
            })}>
              {navLink.icon}
              {navLink.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <SidebarMenu>
          <Button variant="ghost" className="w-full h-14 gap-4 justify-normal">
            <Icon icon_file={loginUser.icon_file} className="w-10 h-10" />
            {loginUser.name}
          </Button>
        </SidebarMenu>
      </div>
    </div>
  )
}