import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";

export async function GET() {
  try {
    const session = await auth();
    if (session) {
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ session: null }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
