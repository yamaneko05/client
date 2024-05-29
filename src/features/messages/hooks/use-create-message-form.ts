import { api } from "@/lib/api"
import { queryClient } from "@/lib/queryClient"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  text: z.string().min(1)
})

type FromDataType = z.infer<typeof formSchema>

export const useCreateMessageForm = (roomId: string) => {
  const form = useForm<FromDataType>({
    defaultValues: { text: "" },
    resolver: zodResolver(formSchema)
  })

  const mutation = useMutation({
    mutationFn: async (formData: FromDataType) => api.post(`/rooms/${roomId}/messages`, formData),
    onSuccess: () => {
      form.reset()
      queryClient.invalidateQueries({queryKey: ["messages", roomId]})
    }
  })

  const onSubmit: SubmitHandler<FromDataType> = (formData) => {
    console.log(formData)
    mutation.mutate(formData)
  }

  return { form, onSubmit }
}