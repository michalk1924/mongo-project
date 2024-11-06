import { NextResponse } from "next/server";
import { getAllDocuments, connectDatabase, insertDocument } from "@/services/mongo";

export async function GET(request : Request,  { params }: { params: any }){
    const { category } = params;
    const client = await connectDatabase();
    const products = await getAllDocuments(client, category);
    await client.close();
    console.log(products);
    return NextResponse.json(products);
}

export async function POST(request: Request,  { params }: { params: any }){
    const { category } = params;
    const client = await connectDatabase();
    const newProduct = await request.json();
    await insertDocument(client, category, newProduct);
    await client.close();
    return NextResponse.json({ message: 'product added successfully!' });
}

// export async function loadCars() {
//     const client = await connectDatabase();
//     try {
//         for (const car of cars) {
//             await insertDocument(client, 'cars', car);
//         }
//     } catch (error) {
//         console.log(error);
//     } finally {
//         await client.close();
//     }
// }