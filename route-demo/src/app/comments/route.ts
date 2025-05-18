import { comments } from "./data";

export async function GET(request: Request) {
    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    }); 
}

export async function POST(request: Request) {
    const { text } = await request.json();
    const newComment = {
        id: comments.length + 1,
        text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}