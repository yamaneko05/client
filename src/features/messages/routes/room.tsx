import { PageHeading } from "@/components/ui/page-heading"
import { useUser } from "@/features/auth/hooks/use-user"
import { CreateMessageForm } from "@/features/messages/components/create-message-form"
import { MessagesList } from "@/features/messages/components/messages-list"
import { RoomType } from "@/features/messages/types"
import { api } from "@/lib/api"
import { queryClient } from "@/lib/queryClient"
import { useQueries } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"

export const RoomRoute = () => {
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  const { roomId } = useParams()

  const { data: loginUser } = useUser()

  const [{data: messages}, {data: room}] = useQueries({
    queries: [
      {
        queryKey: ["messages", roomId],
        queryFn: () => api.get<[]>(`/rooms/${roomId}/messages`).then(res => {
          queryClient.invalidateQueries({queryKey: ["loginUser"]})
          return res.data
        })
      },
      {
        queryKey: ["room", roomId],
        queryFn: () => api.get<RoomType>(`/rooms/${roomId}`).then(res => res.data)
      }
    ]
  })

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView()
  }, [messages])

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView()
  }, [])

  return room && loginUser && roomId && messages ? (
    <div className="relative">
      <PageHeading>メッセージ: {room.users.filter(user => user.id !== loginUser.id).map(user => user.name)}</PageHeading>
      <MessagesList messages={messages} scrollBottomRef={scrollBottomRef} />
      <CreateMessageForm onSuccess={async () => {
        queryClient.invalidateQueries({queryKey: ["messages", roomId]})
      }} roomId={roomId} />
    </div>
  ) : <>loading...</>
}