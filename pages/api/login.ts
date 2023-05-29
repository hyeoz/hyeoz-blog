import cookie from "cookie";
import { fetchJson } from "@/lib/api";

const { CMS_URL } = process.env;

export default async function handleLogin(req: any, res: any) {
  if (req.method !== "POST") {
    // POST 요청만 받도록
    return res.status(405).end();
  }
  try {
    const { email, password } = req.body;

    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: req.method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });

    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, {
          path: "/api", // 쿠키가 설정될 특정 api path
          httpOnly: true,
          maxAge: 60 * 60 * 24,
          // expires: new Date(), // 쿠키 expire date
        })
      )
      .json({
        id: user.id,
        name: user.username,
      });
  } catch (error) {
    console.log(error, "===> ERROR");
    return res.status(401).end(); // Unauthorized
  }
}
