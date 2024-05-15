import { api } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"

export const useLogout = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: () => api.post("../logout"),
    onSuccess: onSuccess
  })
  
  return mutation
}
