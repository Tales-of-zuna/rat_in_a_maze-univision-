import { NextResponse } from "next/server";

export async function GET(request: { nextUrl: { searchParams: any } }) {
  const query = request.nextUrl.searchParams;
  const user = query.get("subId");
  const res = await fetch(
    "http://10.21.64.119:10023/open_promo" + "?subid=" + user,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );
  const gift = await res.json();
  return NextResponse.json(gift);
}
