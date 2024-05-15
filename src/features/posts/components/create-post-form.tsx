import { Button } from "@/components/ui/button"
import { FieldWrapper } from "@/components/ui/field-wrapper"
import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreatePostForm } from "@/features/posts/hooks/use-create-post-form"

export const CreatePostForm = ({onSuccess, parentId}: {
  onSuccess: () => void,
  parentId?: string
}) => {
  const { form, onSubmit } = useCreatePostForm(onSuccess, parentId);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="text" render={({ field }) => (
            <FieldWrapper label="テキスト">
              <Input {...field} />
            </FieldWrapper>
          )}
        />
        <FormField control={form.control} name="image_file" render={({ field: {onChange} }) => (
            <FieldWrapper label="画像">
              <Input type="file" accept="image/*" onChange={(e) => onChange(e.target.files)} />
            </FieldWrapper>
          )}
        />
        <Button type="submit">登録</Button>
      </form>
    </Form>
  )
}