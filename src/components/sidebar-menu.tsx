import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useLogout } from "@/features/auth/hooks/use-logout"
import { Button } from "@/components/ui/button"
import { useUser } from "@/features/auth/hooks/use-user"
import { Icon } from "@/features/users/components/icon"

export const SidebarMenu = () => {
  const { mutate: logout } = useLogout()

  const { data: user } = useUser()

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full h-14 gap-4 justify-normal">
          <Icon icon_file={user.icon_file} className="w-10 h-10" />
          {user.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>メニュー</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>ログアウト</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : 'loading'
}