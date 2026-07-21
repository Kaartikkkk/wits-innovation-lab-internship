export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ];
}

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function BlogPost({ params }: Props) {
    const { id } = await params;

    const posts = {
        "1": {
            title: "Getting Started with Next.js",
            content:
                "Next.js is a React framework that supports server-side rendering and static site generation.",
        },
        "2": {
            title: "Understanding File-Based Routing",
            content:
                "The App Router uses folders and files to automatically create routes.",
        },
        "3": {
            title: "Static Site Generation",
            content:
                "Static pages are generated during the build process for faster performance.",
        },
    };

    const post = posts[id as keyof typeof posts];

    if (!post) {
        return <h1 className="p-10 text-3xl">Post Not Found</h1>;
    }

    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold">{post.title}</h1>

            <p className="mt-6 text-lg">{post.content}</p>

            <p className="mt-10 text-green-600 font-semibold">
                ✅ This page was statically generated using generateStaticParams().
            </p>
        </main>
    );
}