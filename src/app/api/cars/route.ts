import { NextResponse } from "next/server";
import { getAllDocuments, connectDatabase, insertDocument } from "@/services/mongo";
import cars from "./cars";

export async function GET(request: Request) {
    const client = await connectDatabase();
    const cars = await getAllDocuments(client, 'cars');
    await client.close();
    console.log(cars);
    return NextResponse.json(cars);
}

export async function POST(request: Request) {
    const client = await connectDatabase();
    const newCar = await request.json();
    await insertDocument(client, 'cars', newCar);
    await client.close();
    return NextResponse.json({ message: 'Car added successfully!' });
}

export async function loadCars() {
    const client = await connectDatabase();
    try {
        for (const car of cars) {
            await insertDocument(client, 'cars', car);
        }
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}