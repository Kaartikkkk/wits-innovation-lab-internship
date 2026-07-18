import { Link } from "react-router-dom";
import blogs from "../data/blogs";

function Blogs() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>All Blogs</h1>

            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    style={{
                        border: "1px solid gray",
                        margin: "20px 0",
                        padding: "15px",
                        borderRadius: "8px",
                    }}
                >
                    <h2>{blog.title}</h2>

                    <Link to={`/blogs/${blog.id}`}>
                        Read More
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Blogs;