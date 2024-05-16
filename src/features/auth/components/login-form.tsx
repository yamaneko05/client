import { Button } from "@/components/ui/button"
import { FieldWrapper } from "@/components/ui/field-wrapper"
import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLoginForm } from "@/features/auth/hooks/use-login-form"
import { Link } from "react-router-dom"

export const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField control={form.control} name="email" render={({ field }) => (
            <FieldWrapper label="メールアドレス">
              <Input {...field} />
            </FieldWrapper>
          )}
        />
        <FormField control={form.control} name="password" render={({ field }) => (
            <FieldWrapper label="パスワード">
              <Input type="password" {...field} />
            </FieldWrapper>
          )}
        />
        <div className="flex justify-between items-end">
          <Button type="submit">ログイン</Button>
          <Link to="/register" className="text-sm font-medium text-blue-600 underline">新規登録</Link>
        </div>
      </form>
    </Form>
  )
}