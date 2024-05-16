import { PostsList } from "@/features/posts/components/posts-list"
import { PostType } from "@/features/posts/types"
import { UserType } from "@/features/users/types"
import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

type DataType = {
  user: UserType,
  posts: PostType[]
}

export const UserRoute = () => {
  const { userId } = useParams();
  
  const { data } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => api.get<DataType>(`/users/${userId}`).then(res => res.data)
  })

  return data ? (
    <div className="space-y-6">
      <div className="">
        <div className="text-xl font-bold">{data.user.name}</div>
        <div className="">email: {data.user.email}</div>
        <div className="">投稿: {data.user.posts_count}件</div>
        <div className="">{data.user.bio}</div>
      </div>
      <PostsList posts={data.posts} />
    </div>
  ) : "loading"
}