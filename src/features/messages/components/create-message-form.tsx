import { Button } from "@/components/ui/button"
import { Form, FormField } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useCreateMessageForm } from "@/features/messages/hooks/use-create-message-form"

export const CreateMessageForm = ({roomId}: {
  roomId: string
}) => {
  const { form, onSubmit } = useCreateMessageForm(roomId)

  return (
    <div className="fixed bottom-0 left-0 right-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 p-2">
          <FormField control={form.control} name="text" render={({ field }) => (
            <Textarea cols={32} rows={1} {...field} className="" placeholder="テキスト" />
          )} />
          <div className="text-end">
            <Button size="sm" type="submit">送信</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}