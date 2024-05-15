import { toast } from "@/components/ui/use-toast"
import { CreatePostForm } from "@/features/posts/components/create-post-form"

export const CreatePostRoute = () => {
  return (
    <>
      <div className="text-3xl font-bold mb-4">新規投稿</div>
      <CreatePostForm onSuccess={() => {
        toast({description: "投稿しました"})
      }} />
    </>
  )
}