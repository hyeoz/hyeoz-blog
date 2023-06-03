import { fetchJson } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

const USER_QUERY_KEY = "user";

export function useUser() {
  const { data: user } = useQuery(
    USER_QUERY_KEY,
    async () => {
      try {
        const user = await fetchJson("/api/user");
        return user;
      } catch (error) {
        return undefined;
      }
    },
    {
      cacheTime: Infinity, // 데이터를 캐싱하여 가지고 있는 시간
      staleTime: 30_000, // ms, 데이터 fetching 을 하는 시간
    }
  );

  return user;
}

export function useSignIn() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      fetchJson(`/api/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  );
  return {
    mutation,
    onSuccessSignIn: async (email: string, password: string) => {
      const user = await mutation.mutateAsync({ email, password });
      queryClient.setQueryData(USER_QUERY_KEY, user);

      if (user) return true;
      return false;
    },
  };
}

export function useSignOut() {
  const queryClient = useQueryClient();
  // onClick 시 쿠키를 삭제해야 하는데, 보안상 (httpOnly) 클라이언트 단에서 쿠키에 접근할 수 없기 때문에
  // api route 이용
  const mutation = useMutation(async () => await fetchJson("/api/logout"));

  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
  };
}
