import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import Layout from "@/components/Layout";

export default function SignIn() {
  return (
    <Layout title="Sign In">
      <form>
        <Field label="EMAIL">
          <Input type="email" />
        </Field>
        <Field label="PASSWORD">
          <Input type="password" />
        </Field>
        <Button type="submit">Sign In</Button>
      </form>
    </Layout>
  );
}
