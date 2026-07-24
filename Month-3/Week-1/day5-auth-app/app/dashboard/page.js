"use client";

import { useRouter } from "next/navigation";
import "../styles/dashboard.css";

export default function Dashboard() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/logout", {
            method: "POST",
        });

        router.push("/login");
    }

    return (
        <div className="dashboard">

            <nav className="navbar">
                <div className="logo">🔐 SecureAuth</div>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </nav>

            <div className="container">

                <div className="welcome-card">

                    <h1>Welcome, Admin 👋</h1>

                    <p>
                        You have successfully logged into your secure dashboard.
                    </p>

                    <br />

                    <p className="status">
                        🟢 Authentication Successful
                    </p>

                </div>

                <div className="cards">

                    <div className="card">
                        <h3>🔒 Middleware</h3>
                        <p className="success">Enabled</p>
                    </div>

                    <div className="card">
                        <h3>🛡 Protected Routes</h3>
                        <p className="success">Working</p>
                    </div>

                    <div className="card">
                        <h3>🍪 Secure Cookies</h3>
                        <p className="success">Stored</p>
                    </div>

                    <div className="card">
                        <h3>⚡ Next.js</h3>
                        <p className="success">App Router</p>
                    </div>

                </div>

            </div>

        </div>
    );
}