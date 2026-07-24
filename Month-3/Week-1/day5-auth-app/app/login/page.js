"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/login.css";

export default function Login() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (res.ok) {
            router.push("/dashboard");
        } else {
            setError("Invalid Username or Password");
        }

        setLoading(false);
    }

    return (
        <div className="login-container">

            <form className="login-card" onSubmit={handleLogin}>

                <h1 className="login-title">
                    🔐 SecureAuth
                </h1>

                <p className="login-subtitle">
                    Sign in to continue
                </p>

                <input
                    className="input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn">
                    {loading ? "Logging in..." : "Login"}
                </button>

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <div className="demo">

                    <b>Demo Credentials</b>

                    <br /><br />

                    Username : admin

                    <br />

                    Password : 123456

                </div>

            </form>

        </div>
    );
}