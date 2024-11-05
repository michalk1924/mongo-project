import { NextResponse, NextRequest } from "next/server";
import { connectDatabase, deleteDocument } from "@/services/mongo";

export async function DELETE(request: NextRequest, { params }: { params: any }) {
    try {
        const client = await connectDatabase();
        const { id } = params;
        await deleteDocument(client, 'cars', id);
        return NextResponse.json({ message: 'Car deleted successfully!' });
    }
    catch (error : any) {
        return NextResponse.json({ error: error.message });
    }
}