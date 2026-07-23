import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts";

export async function generateMetadata({ params }) {
    const { id } = await params;

    const post = posts.find((item) => item.id === id);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.content,
    };
}

export default async function BlogPost({ params }) {
    const { id } = await params;

    const post = posts.find((item) => item.id === id);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="rounded-lg mb-6"
            />

            <h1 className="text-4xl font-bold mb-4">
                {post.title}
            </h1>

            <p className="text-lg leading-8">
                {post.content}
            </p>
        </div>
    );
}