import { SidebarMenu } from "@/components/sidebar-menu"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, NavLink } from "react-router-dom"

const navLinks = [
  {
    title: "ホーム",
    to: "/"
  },
  {
    title: "プロフィール",
    to: "/profile"
  }
]

export const Sidebar = () => {
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
              {navLink.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <SidebarMenu />
      </div>
    </div>
  )
}