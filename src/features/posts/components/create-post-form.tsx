import { Button } from "@/components/ui/button"
import { FieldWrapper } from "@/components/ui/field-wrapper"
import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useUser } from "@/features/auth/hooks/use-user"
import { useCreatePostForm } from "@/features/posts/hooks/use-create-post-form"
import { Icon } from "@/features/users/components/icon"
import { Link } from "react-router-dom"

export const CreatePostForm = ({onSuccess, parentId}: {
  onSuccess: () => void,
  parentId?: string
}) => {
  const { form, onSubmit } = useCreatePostForm(onSuccess, parentId);

  const { data: loginUser } = useUser();
  
  return loginUser && (
    <div className="flex gap-2">
      <div className="">
        <Link to={`/users/${loginUser.id}`}>
          <Icon className="w-10 h-10" icon_file={loginUser.icon_file} />
        </Link>
      </div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
            <Button size="sm" type="submit">投稿</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}