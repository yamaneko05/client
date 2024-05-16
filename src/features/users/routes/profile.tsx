import { useUser } from "@/features/auth/hooks/use-user"
import { Navigate } from "react-router-dom";

export const ProfileRoute = () => {
  const { data: user } = useUser();

  return user && <Navigate to={`/users/${user.id}`} />
}