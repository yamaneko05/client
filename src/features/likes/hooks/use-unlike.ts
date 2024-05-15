import { api } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"

export const useUnlike = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: (likeId: string) => api.delete(`/likes/${likeId}`),
    onSuccess: onSuccess
  })
  
  return mutation
}
