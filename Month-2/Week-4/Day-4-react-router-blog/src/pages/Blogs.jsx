import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Blogs() {
    return (
        <div className="blogs-container">
            <h1>Latest Articles</h1>
            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;