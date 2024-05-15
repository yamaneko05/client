import { PostCard } from "@/features/posts/components/post-card"
import { PostType } from "@/features/posts/types"

export const PostsList = ({posts}: {
  posts: PostType[]
}) => {
  return (
    <div className="space-y-6">
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}