import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { username, password } = await request.json();

    if (username === "admin" && password === "123456") {
        const cookieStore = await cookies();

        cookieStore.set("token", "loggedin", {
            httpOnly: true,
            path: "/",
        });

        return NextResponse.json({
            success: true,
            message: "Login Successful",
        });
    }

    return NextResponse.json(
        {
            success: false,
            message: "Invalid Credentials",
        },
        {
            status: 401,
        }
    );
}