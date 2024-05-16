import { Button } from "@/components/ui/button"
import { useUser } from "@/features/auth/hooks/use-user"
import { PostsList } from "@/features/posts/components/posts-list"
import { PostType } from "@/features/posts/types"
import { UserType } from "@/features/users/types"
import { api } from "@/lib/api"
import { queryClient } from "@/lib/queryClient"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"

type DataType = {
  user: UserType,
  posts: PostType[]
}

export const UserRoute = () => {
  const { userId } = useParams();

  const { data: loginUser } = useUser();
  
  const { data } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => api.get<DataType>(`/users/${userId}`).then(res => res.data)
  })

  const invalidate = () => queryClient.invalidateQueries({queryKey: ["user", userId]})

  return data && loginUser ? (
    <div className="space-y-6">
      <div className="">
        <div className="text-xl font-bold">
          {data.user.name}
          {data.user.id === loginUser.id && (
            <Button size="sm" asChild>
              <Link to={`/users/${loginUser.id}/edit`}>プロフィールを編集</Link>
              </Button>
          )}
        </div>
        <div className="">email: {data.user.email}</div>
        <div className="">投稿: {data.user.posts_count}件</div>
        <div className="">{data.user.bio}</div>
      </div>
      <PostsList posts={data.posts} invalidate={invalidate} />
    </div>
  ) : "loading"
}