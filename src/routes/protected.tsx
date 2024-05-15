import { UserType } from "@/features/users/types"
import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"

export const Protected = () => {
  const { isSuccess, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get<UserType>(`/user`).then(res => res.data),
    retry: false
  })

  return isError ? <Navigate to="/login" /> : isSuccess ? <Outlet /> : "loading"
}