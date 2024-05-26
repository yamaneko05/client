import { toast } from "@/components/ui/use-toast"
import { STORAGE_URL } from "@/constants"
import { useUser } from "@/features/auth/hooks/use-user"
import { PostMenu } from "@/features/posts/components/post-menu"
import { useDeletePost } from "@/features/posts/hooks/use-delete-post"
import { useLike } from "@/features/posts/hooks/use-like"
import { useUnlike } from "@/features/posts/hooks/use-unlike"
import { PostType } from "@/features/posts/types"
import { Icon } from "@/features/users/components/icon"
import { Heart, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"

export const PostCard = ({post, invalidate}: {
  post: PostType,
  invalidate: () => Promise<void>
}) => {
  const { data: loginUser } = useUser();

  const { mutate: like } = useLike(() => {
    toast({description: "いいねしました"})
    invalidate()
  })

  const { mutate: unlike } = useUnlike(() => {
    toast({description: "いいねを解除しました"})
    invalidate()
  })

  const { mutate: deleteFn } = useDeletePost(() => {
    toast({description: "投稿を削除しました"})
    invalidate()
  }, post.id)

  return loginUser && (
    <div className="flex gap-2">
      <div className="flex-shrink-0">
        <Link to={`/users/${post.user.id}`}>
          <Icon className="w-10 h-10" icon_file={post.user.icon_file} />
        </Link>
      </div>
      <div className="flex-grow">
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
            <a href={STORAGE_URL+post.image_file} target="_blank" rel="noopener noreferrer">
              <img src={STORAGE_URL+post.image_file} alt="" />
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
              <Heart
                size={18}
                className="hover:cursor-pointer"
                color="red"
                fill="red"
                onClick={() => unlike({postId: post.id, userId: loginUser.id})}
              />
            ) : (
              <Heart
                size={18}
                className="hover:cursor-pointer"
                onClick={() => like({postId: post.id, userId: loginUser.id})}
              />
            )}
            <div className="">{post.likers_count}</div>
          </div>
        </div>
      </div>
    </div>
  )
}