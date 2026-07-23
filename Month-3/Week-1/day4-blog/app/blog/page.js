import Link from "next/link";
import Image from "next/image";
import { posts } from "../data/posts";

export default function BlogPage() {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-10">
                Blog Posts
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border rounded-xl shadow-lg overflow-hidden"
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={350}
                            className="w-full h-60 object-cover"
                        />

                        <div className="p-5">
                            <h2 className="text-2xl font-semibold mb-3">
                                {post.title}
                            </h2>

                            <Link
                                href={`/blog/${post.id}`}
                                className="text-blue-600 font-semibold"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}