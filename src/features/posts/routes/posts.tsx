import { toast } from "@/components/ui/use-toast"
import { CreatePostForm } from "@/features/posts/components/create-post-form"
import { PostsList } from "@/features/posts/components/posts-list"
import { queryClient } from "@/lib/queryClient"
import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { PostType } from "@/features/posts/types"

export const PostsRoute = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api.get<PostType[]>(`/posts`).then(res => res.data)
  })

  const invalidate = () => queryClient.invalidateQueries({queryKey: ["posts"]})

  return (
    <div className="space-y-8">
      <CreatePostForm onSuccess={() => {
        toast({description: "投稿しました"})
        invalidate()
      }} />
      {posts ? <PostsList posts={posts} invalidate={invalidate} /> : "loading"}
    </div>
  )
}