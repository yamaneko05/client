import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useLike } from "@/features/likes/hooks/use-like"
import { useUnlike } from "@/features/likes/hooks/use-unlike"
import { PostMenu } from "@/features/posts/components/post-menu"
import { useDeletePost } from "@/features/posts/hooks/use-delete-post"
import { PostType } from "@/features/posts/types"
import { queryClient } from "@/lib/queryClient"
import { Heart, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"

export const PostCard = ({post}: {
  post: PostType
}) => {
  const { mutate: like } = useLike(() => {
    toast({description: "いいねしました"})
    queryClient.invalidateQueries({queryKey: ["posts"]})
  }, post.id)

  const { mutate: unlike } = useUnlike(() => {
    toast({description: "いいねを解除しました"})
    queryClient.invalidateQueries({queryKey: ["posts"]})
  })

  const { mutate: deleteFn } = useDeletePost(() => {
    toast({description: "投稿を削除しました"})
    queryClient.invalidateQueries({queryKey: ["posts"]})
  }, post.id)

  return (
    <div className="pl-[50px]">
        <div className="flex justify-between items-center">
          <div className="font-medium">
            <Link to={`/users/${post.user.id}`}>{post.user.name}</Link>
          </div>
          <PostMenu handleDeleteClick={() => deleteFn()} />
        </div>
        <Link to={`/posts/${post.id}`}>
          <div className="text-lg pt-1">
            {post.text}
          </div>
        </Link>
        {post.image_file && (
          <div className="pt-2">
            <a href={"http://localhost:8000/storage/"+post.image_file} target="_blank" rel="noopener noreferrer">
              <img src={"http://localhost:8000/storage/"+post.image_file} alt="" />
            </a>
          </div>
        )}

      <div className="flex gap-16 pt-2">
        <div className="flex items-center gap-2">
          <Link to={`/posts/${post.id}`}>
            <MessageSquare size={18} />
          </Link>
          <div className="">{post.children_count}</div>
        </div>
        <div className="flex items-center gap-2">
          {post.like ? (
            <Heart size={18} className="hover:cursor-pointer" color="red" fill="red" onClick={() => unlike(post.like!.id)} />
          ) : (
            <Heart size={18} className="hover:cursor-pointer" onClick={() => like()} />
          )}
          <div className="">{post.likes_count}</div>
        </div>
      </div>
    </div>
  )
}