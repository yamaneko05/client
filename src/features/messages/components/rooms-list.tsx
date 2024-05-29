import { Badge } from "@/components/ui/badge"
import { useUser } from "@/features/auth/hooks/use-user"
import { RoomType } from "@/features/messages/types"
import { Link } from "react-router-dom"

export const RoomsList = ({rooms}: {
  rooms: RoomType[]
}) => {
  const { data: loginUser } = useUser();

  return loginUser && (
    <div className="space-y-4">
      {rooms.map(room => (
        <div key={room.id} className="relative">
          <Link to={`/rooms/${room.id}`}>
            <div className="font-medium">
              {room.users.filter(user => user.id !== loginUser.id).map(user => user.name)}
            </div>
          </Link>
          {/* {room.read_at ? null : (
            <div className="absolute top-0 right-0 p-2">
              <Badge>新着</Badge>
            </div>
          )} */}
        </div>
      ))}
    </div>
  )
}