export default function Product({ product }) {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>{product.title}</h1>

            <img
                src={product.image}
                alt={product.title}
                width="200"
            />

            <h2>${product.price}</h2>

            <p>{product.description}</p>

            <p>
                <strong>Category:</strong> {product.category}
            </p>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
    );

    const product = await res.json();

    return {
        props: {
            product,
        },
    };
}