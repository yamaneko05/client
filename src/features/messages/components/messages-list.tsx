import { useUser } from "@/features/auth/hooks/use-user"
import { MessageType } from "@/features/messages/types"
import { Icon } from "@/features/users/components/icon"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export const MessagesList = ({messages}: {
  messages: MessageType[]
}) => {
  const { data: loginUser } = useUser()

  return loginUser && (
    <div className="space-y-2">
      {messages.map(message => (
        <div className={cn(
          ["flex gap-2"],
          message.user.id === loginUser.id && ["flex-row-reverse"]
        )}>
          <div className="flex-shrink-0">
            <Link to={`/users/${message.user.id}`}>
              <Icon className="w-10 h-10" icon_file={message.user.icon_file} />
            </Link>
          </div>
          <div className="py-2">
            {message.text}
            <div className="text-sm">{message.created_at}</div>
          </div>
        </div>
      ))}
    </div>
  )
}