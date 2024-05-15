import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"

export const PostMenu = ({handleDeleteClick}: {
  handleDeleteClick: () => void
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>メニュー</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteClick}>削除</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}