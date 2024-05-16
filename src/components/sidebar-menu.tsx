import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useLogout } from "@/features/auth/hooks/use-logout"
import { Button } from "@/components/ui/button"
import { useUser } from "@/features/auth/hooks/use-user"

export const SidebarMenu = () => {
  const { mutate: logout } = useLogout()

  const { data: user } = useUser()

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-normal">
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