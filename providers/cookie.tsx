import { cookies } from "next/headers";
const Cookie = () => {
  const giftsCookie = cookies();
  const cookie = giftsCookie.get("gifts");
  console.log(cookie);
  return cookie;
};

export default Cookie;
