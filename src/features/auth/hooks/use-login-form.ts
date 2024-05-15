import { api } from "@/lib/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

type Inputs = z.infer<typeof formSchema>

export const useLoginForm = (onSuccess: () => void) => {
  const form = useForm<Inputs>({
    defaultValues: {
      email: "", password: ""
    },
    resolver: zodResolver(formSchema)
  });
  
  const mutation = useMutation({
    mutationFn: async (data: Inputs) => {
      await api.get('../sanctum/csrf-cookie')
      return api.post("../login", data)
    },
    onSuccess: onSuccess
  })
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(data);
  }

  return { form, onSubmit }
}
