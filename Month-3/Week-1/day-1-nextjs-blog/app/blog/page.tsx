type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ];
}

export default async function Page({ params }: Props) {
    const { id } = await params;

    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold">Blog Post {id}</h1>
            <p className="mt-4">
                This page is statically generated using generateStaticParams().
            </p>
        </main>
    );
}