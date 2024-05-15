import { Button, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useLogout } from "@/features/auth/hooks/use-logout"
import { cn } from "@/lib/utils"
import { Link, NavLink, useNavigate } from "react-router-dom"

const navLinks = [
  {
    title: "ホーム",
    to: "/"
  },
  {
    title: "プロフィール",
    to: "/users/2"
  },
  {
    title: "新規投稿",
    to: "/posts/create"
  }
]

export const Sidebar = () => {
  const navigate = useNavigate();
  const { mutate: logout } = useLogout(() => {
    toast({description: "ログアウトしました"})
    navigate("/login")
  })

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
        <Button onClick={() => logout()} variant="outline" className="w-full">
          ログアウト
        </Button>
      </div>
    </div>
  )
}