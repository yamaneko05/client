import { UserType } from "@/features/users/types"

export type RoomType = {
  id: string,
  created_at: string,
  users: UserType[]
}

export type MessageType = {
  id: string,
  text: string,
  created_at: string,
  user: UserType
}