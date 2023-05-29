import { fetchJson } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [user, setUser] = useState<{ id: string; name: string }>();

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson("/api/user");
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSignOut = async () => {
    // onClick 시 쿠키를 삭제해야 하는데, 보안상 (httpOnly) 클라이언트 단에서 쿠키에 접근할 수 없기 때문에
    // api route 이용
    await fetchJson("/api/logout");
    setUser(undefined);
  };

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1" />
        {!user ? (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        ) : (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
