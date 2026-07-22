export default function StaticProducts({ products }) {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Products (SSG)</h1>

            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        marginBottom: "15px",
                    }}
                >
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}