import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { fetchJson } from "@/lib/api";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

// 개발버전에서 시간 지연을 위한 함수
function sleep(ms: number) {
  return new Promise((reserve) => setTimeout(reserve, ms));
}

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({
    loading: false,
    error: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({
      ...status,
      loading: true,
    });

    try {
      await fetchJson(`/api/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      setStatus({
        ...status,
        error: false,
      });

      router.push("/");
    } catch (error) {
      console.log("ERROR", error);
      setStatus({
        ...status,
        error: false,
      });
    }

    setStatus({
      ...status,
      loading: false,
    });
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
        {status.error && <p className="text-red-700">Invalid Password!</p>}
        <Button type="submit" disabled={status.loading}>
          Sign In
        </Button>
      </form>
    </Layout>
  );
}
