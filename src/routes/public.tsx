import { UserType } from "@/features/users/types"
import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"

export const Public = () => {
  const { isSuccess, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get<UserType>(`/user`).then(res => res.data),
    retry: false
  })

  return isSuccess ? <Navigate to="/posts/create" /> : isError ? <Outlet /> : "loading"
}