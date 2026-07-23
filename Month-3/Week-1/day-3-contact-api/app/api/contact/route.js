export async function POST(request) {
    try {
        // Get data from the frontend
        const body = await request.json();

        const { name, email, message } = body;

        // Check if all fields are filled
        if (!name || !email || !message) {
            return Response.json(
                {
                    success: false,
                    message: "All fields are required.",
                },
                { status: 400 }
            );
        }

        // Print the data in the terminal
        console.log("New Contact Form Submission:");
        console.log(body);

        // Send success response
        return Response.json(
            {
                success: true,
                message: "Message received successfully!",
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Something went wrong!",
            },
            { status: 500 }
        );
    }
}