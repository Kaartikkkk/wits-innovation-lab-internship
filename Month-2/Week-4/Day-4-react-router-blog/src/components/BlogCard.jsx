import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.content.substring(0, 80)}...</p>
      </div>
      <Link to={`/blogs/${blog.id}`} className="blog-card-link">
        Read More <span>→</span>
      </Link>
    </div>
  );
}

export default BlogCard;
