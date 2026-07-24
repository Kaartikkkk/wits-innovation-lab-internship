import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "rgba(255,255,255,.1)",
          padding: "60px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>
          🔐 SecureAuth
        </h1>

        <p style={{ margin: "20px 0" }}>
          Next.js Middleware Authentication Demo
        </p>

        <Link href="/login">
          <button
            style={{
              padding: "15px 40px",
              borderRadius: "10px",
              border: "none",
              background: "white",
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}