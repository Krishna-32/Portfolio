import { users } from "@/app/users/route";
import { NextResponse } from "next/server";

export async function GET(
 _request: Request,
 {params}: {params: {id: string}}
){
  const user = users.find((user) => user.id === parseInt(params.id));
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}
