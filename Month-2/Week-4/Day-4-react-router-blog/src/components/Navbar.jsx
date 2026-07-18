import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                gap: "20px",
                padding: "20px",
                backgroundColor: "#282c34",
            }}
        >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
            </Link>

            <Link to="/blogs" style={{ color: "white", textDecoration: "none" }}>
                Blogs
            </Link>

            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                About
            </Link>
        </nav>
    );
}

export default Navbar;