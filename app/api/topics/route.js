import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

// API for creating topic on server
export const POST = async (request) => {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201});
};
// Getting topic to the server
export const GET = async () => {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
};

// Deleting topic on server
export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"}, {status: 200});
};