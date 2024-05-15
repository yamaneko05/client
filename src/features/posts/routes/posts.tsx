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

  return (
    <div className="space-y-8">
      <CreatePostForm onSuccess={() => {
        toast({description: "投稿しました"})
        queryClient.invalidateQueries({queryKey: ["posts"]})
      }} />
      {posts ? <PostsList posts={posts} /> : "loading"}
    </div>
  )
}