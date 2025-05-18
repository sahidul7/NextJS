import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((comment) => comment.id === parseInt(params.id));
    if (!comment) {
        return new Response("Comment not found", { status: 404 });
    }
    return new Response(JSON.stringify(comment), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    if (index === -1) {
        return new Response("Comment not found", { status: 404 });
    }
    const { text } = await request.json();
    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    if (index === -1) {
        return new Response("Comment not found", { status: 404 });
    }
    comments.splice(index, 1);
    return new Response(null, { status: 204 });
}
