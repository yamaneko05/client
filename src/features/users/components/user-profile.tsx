import { UserType } from "@/features/users/types"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { toast } from "@/components/ui/use-toast"
import { useFollow } from "@/features/users/hooks/use-follow"
import { useUnfollow } from "@/features/users/hooks/use-unfollow"
import { useUser } from "@/features/auth/hooks/use-user"

export const UserProfile = ({user, invalidate}: {
  user: UserType,
  invalidate: () => Promise<void>
}) => {
  const { data: loginUser } = useUser();

  const { mutate: follow } = useFollow(() => {
    toast({description: "フォローしました"})
    invalidate()
  })

  const { mutate: unfollow } = useUnfollow(() => {
    toast({description: "フォロー解除しました"})
    invalidate()
  })

  return loginUser && (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="">email: {user.email}</div>
        </div>
        <div className="">
          {user.id === loginUser.id ? (
            <Button variant="link" size="sm" asChild>
              <Link to={`/users/${loginUser.id}/edit`}>プロフィールを編集</Link>
            </Button>
          ) : user.following ? (
            <Button
              size="sm"
              variant="secondary"
              onClick={() => unfollow({followeeId: user.id, followerId: loginUser.id})}
            >
              フォロー解除する
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => follow({followeeId: user.id, followerId: loginUser.id})}
            >
              フォローする
            </Button>
          )}
        </div>
      </div>
      <div className="flex gap-4 pt-2 pb-1">
        <div className="">投稿: {user.posts_count}件</div>
        <div className="">
        <Link to={`/users/${user.id}/followings`}>フォロー中: {user.followings_count}人</Link>
        </div>
        <div className="">
          <Link to={`/users/${user.id}/followers`}>フォロワー: {user.followers_count}人</Link>
        </div>
      </div>
      <div className="">{user.bio}</div>
    </div>
  )
}