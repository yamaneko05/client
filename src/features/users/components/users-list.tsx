import { STORAGE_URL } from "@/constants"
import { Icon } from "@/features/users/components/icon"
import { UserType } from "@/features/users/types"
import { Link } from "react-router-dom"

export const UsersList = ({users}: {
  users: UserType[]
}) => {
  return (
    <div className="space-y-4">
      {users.map(user => (
        <Link to={`/users/${user.id}`} className="block" key={user.id}>
          <div className="flex gap-2 items-center">
            <Icon className="w-10 h-10" icon_file={STORAGE_URL+user.icon_file} />
            <div className="font-medium">{user.name}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}