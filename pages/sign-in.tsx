import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { fetchJson } from "@/lib/api";
import { useSignIn } from "@/hooks/user";

// 개발버전에서 시간 지연을 위한 함수
function sleep(ms: number) {
  return new Promise((reserve) => setTimeout(reserve, ms));
}

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutation, onSuccessSignIn } = useSignIn();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = await onSuccessSignIn(email, password);

    if (valid) {
      router.push("/");
    }
  };

  return (
    <Layout title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="EMAIL">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
        <Field label="PASSWORD">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>
        {mutation.isError && <p className="text-red-700">Invalid Password!</p>}
        <Button type="submit" disabled={mutation.isLoading}>
          Sign In
        </Button>
      </form>
    </Layout>
  );
}
