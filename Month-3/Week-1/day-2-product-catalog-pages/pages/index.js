import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>🛍️ Next.js Product Catalog</h1>

      <p>Select a rendering method:</p>

      <ul>
        <li>
          <Link href="/products">
            Product Catalog (SSR)
          </Link>
        </li>

        <li>
          <Link href="/products/static">
            Product Catalog (SSG)
          </Link>
        </li>
      </ul>
    </div>
  );
}