import { LikeType } from "@/features/likes/types"
import { UserType } from "@/features/users/types"

export type PostType = {
  id: string,
  text: string,
  user: UserType,
  children_count: number,
  likes_count: number,
  like?: LikeType,
  image_file?: string,
  parent?: PostType,
  children?: PostType[]
}