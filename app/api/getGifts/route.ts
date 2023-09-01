import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = request;

  try {
    const res = await fetch(
      "http://10.21.64.119:10023/get_gift_list" + "?subid=" + user,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    const gifts = await res.json();
    return NextResponse.json(gifts);
  } catch (error) {
    throw new Error();
  }
}
