import { useSignOut, useUser } from "@/hooks/user";
import { fetchJson } from "@/lib/api";
import Link from "next/link";
import { useQuery } from "react-query";

export default function NavBar() {
  const user = useUser();
  const signOut = useSignOut();

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
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
