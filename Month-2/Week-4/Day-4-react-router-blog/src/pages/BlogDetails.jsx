import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

function BlogDetails() {
    const { id } = useParams();

    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return <h2>Blog Not Found</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{blog.title}</h1>

            <p>{blog.content}</p>
        </div>
    );
}

export default BlogDetails;