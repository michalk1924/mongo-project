import { NextResponse, NextRequest } from "next/server";
import { connectDatabase, deleteDocument } from "@/services/mongo";

export async function DELETE(request: NextRequest, { params }: { params: any }) {
    try {
        const client = await connectDatabase();
        const { id, category } = params;
        await deleteDocument(client, category, id);
        return NextResponse.json({ message: 'Product deleted successfully!' });
    }
    catch (error : any) {
        return NextResponse.json({ message : "error" });
    }
}