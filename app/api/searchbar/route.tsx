import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

const table: string = "pages";
const column: string = "id, title";
const like_column: string = "title";

export async function POST(request: Request){
    const supabase = await createClient();

    try {
        const { searchString } = await request.json()
        console.log(searchString)

        const { data, error } = await supabase
            .from(table)
            .select(column)
            .ilike(like_column,`%${searchString}%`)
        
        if (error) {
            throw new Error(error.message)
        }

        console.log(data);

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Supabase Error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch pages' },
            { status: 500 }
        )
    }
}