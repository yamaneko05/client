import { PostType } from "@/features/posts/types"
import { EditUserForm } from "@/features/users/components/edit-user-form"
import { UserType } from "@/features/users/types"
import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

type DataType = {
  user: UserType,
  posts: PostType[]
}

export const EditUserRoute = () => {
  const { userId } = useParams();
  
  const { data } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => api.get<DataType>(`/users/${userId}`).then(res => res.data)
  })

  return data ? (
    <EditUserForm user={data.user} />
  ) : "loading"
}