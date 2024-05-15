import { api } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"

export const useLike = (onSuccess: () => void, postId: string) => {
  const mutation = useMutation({
    mutationFn: () => api.post("/likes", {post_id: postId}),
    onSuccess: onSuccess
  })
  
  return mutation
}
