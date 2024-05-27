export type UserType = {
  id: string,
  name: string,
  email: string,
  bio: string,
  posts_count: number,
  followings_count: number,
  followers_count: number,
  icon_file: string,
  following?: boolean
  followed?: boolean,
  unread_notifications_count: number
}

export type FollowType = {
  id: string,
  follower_id: string,
  followee_id: string
}
