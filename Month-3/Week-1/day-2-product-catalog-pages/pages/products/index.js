import Link from "next/link";

export default function Products({ products }) {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Products (SSR)</h1>

            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        marginBottom: "20px",
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        width="100"
                        height="100"
                    />

                    <h3>{product.title}</h3>

                    <p><strong>Price:</strong> ${product.price}</p>

                    <Link href={`/products/${product.id}`}>
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}