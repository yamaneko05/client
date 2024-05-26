import { SidebarMenu } from "@/components/sidebar-menu"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icon } from "@/features/users/components/icon"
import { UserType } from "@/features/users/types"
import { cn } from "@/lib/utils"
import { navLinkType } from "@/routes/layout"
import { NavLink } from "react-router-dom"

export const Bottombar = ({loginUser, navLinks}: {
  loginUser: UserType,
  navLinks: navLinkType[]
}) => {
  return (
    <div className="fixed bottom-0 w-full p-2 bg-white border-t">
      <div className="flex justify-around">
        {navLinks.map((navLink, index) => (
          <NavLink to={navLink.to} key={index} className={({isActive}) => buttonVariants({
            variant: "link",
            className: cn(["!justify-normal w-full text-xl", isActive ? "font-bold underline" : "font-normal"])
          })}>
            {navLink.icon}
          </NavLink>
        ))}
        <SidebarMenu>
          <Button variant="ghost">
            <Icon icon_file={loginUser.icon_file} className="w-6 h-6" />
          </Button>
        </SidebarMenu>
      </div>
    </div>
  )
}