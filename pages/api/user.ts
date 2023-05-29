import { fetchJson } from "@/lib/api";

const { CMS_URL } = process.env;

// setting 된 쿠키를 읽어 유저 정보를 읽어오는 api
export default async function handleUser(req: any, res: any) {
  const { jwt } = req.cookies;

  if (!jwt) {
    res.status(401).end();
    return;
  }

  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    res.status(200).json({
      id: user.id,
      name: user.username,
    });
    return;
  } catch (error) {
    return res.status(401).end();
  }
}
