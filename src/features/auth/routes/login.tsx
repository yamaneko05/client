import { toast } from "@/components/ui/use-toast"
import { LoginForm } from "@/features/auth/components/login-form"
import { useNavigate } from "react-router-dom"

export const LoginRoute = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="font-medium text-xl mb-4">ログイン</div>
      <LoginForm onSuccess={() => {
        toast({description: "ログインしました"})
        navigate("/")
      }} />
    </>
  )
}