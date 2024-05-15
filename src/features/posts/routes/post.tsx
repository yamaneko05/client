import { toast } from "@/components/ui/use-toast"
import { CreatePostForm } from "@/features/posts/components/create-post-form"
import { PostCard } from "@/features/posts/components/post-card"
import { PostsList } from "@/features/posts/components/posts-list"
import { PostType } from "@/features/posts/types"
import { api } from "@/lib/api"
import { queryClient } from "@/lib/queryClient"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

type DataType = {
  post: PostType,
  children: PostType[]
}

export const PostRoute = () => {
  const { postId } = useParams();
  
  const { data } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => api.get<DataType>(`/posts/${postId}`).then(res => res.data)
  })

  return data ? (
    <div className="space-y-6">
      <PostCard post={data.post} />
      <CreatePostForm onSuccess={() => {
        toast({description: "返信を投稿しました"})
        queryClient.invalidateQueries({queryKey: ["post"]})
      }} parentId={data.post.id} />
      <PostsList posts={data.children} />
    </div>
  ) : "loading"
}