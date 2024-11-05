import { NextResponse } from "next/server";
import { getAllDocuments, connectDatabase, insertDocument } from "@/services/mongo";

export async function GET(request : Request){
    const client = await connectDatabase();
    const cars = await getAllDocuments(client, 'cars');
    await client.close();
    console.log(cars);
    return NextResponse.json(cars);
}

export async function POST(request: Request){
    const client = await connectDatabase();
    const newCar = await request.json();
    await insertDocument(client, 'cars', newCar);
    await client.close();
    return NextResponse.json({ message: 'Car added successfully!' });
}
