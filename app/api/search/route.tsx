import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import contacts from "./contacts"

async function pageQuery(searchString: string, page: number) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("pages")
    .select("id, title, created_at")
    .ilike("title", `%${searchString}%`)
    .range((page - 1) * 10, page * 10 - 1)

  if (error) {
    throw new Error(error.message)
  }
  return data
}

async function eventQuery(searchString: string, page: number) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("events")
    .select("id, title, start_time, end_time")
    .ilike("title", `%${searchString}%`)
    .range((page - 1) * 10, page * 10 - 1)

  if (error) {
    throw new Error(error.message)
  }
  return data
}

// DEMO function that uses an array

async function contactQuery(searchString: string, page: number) {
  if (typeof searchString !== "string") {
    throw new Error("searchString must be a string")
  }

  if (searchString === "*") {
    return contacts.slice((page - 1) * 10, page * 10)
  }

  return contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(searchString.toLowerCase()),
    )
    .slice((page - 1) * 10, page * 10)
}

async function pageCountQuery(searchString: string, page: number) {
  const supabase = await createClient()
  const { count, error } = await supabase
    .from("pages")
    .select("id", { count: "exact", head: true })
    .ilike("title", `%${searchString}%`)

  if (error) {
    throw new Error(error.message)
  }
  return count
}

async function eventCountQuery(searchString: string, page: number) {
  const supabase = await createClient()
  const { count, error } = await supabase
    .from("events")
    .select("id", { count: "exact", head: true })
    .ilike("title", `%${searchString}%`)

  if (error) {
    throw new Error(error.message)
  }
  return count
}

// DEMO function that uses an array

async function contactCountQuery(searchString: string, page: number) {
  if (typeof searchString !== "string") {
    throw new Error("searchString must be a string")
  }

  if (searchString === "*") {
    return contacts.length
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchString.toLowerCase()),
  ).length
}

/* 
async function contactQuery(searchString: string) {
     const supabase = await createClient();
     const { count, error } = await supabase
         .from("contacts")
         .select("id", { count: "exact", head: true })
         .ilike("name", `%${searchString}%`);

     if (error) {
         throw new Error(error.message);
     }
     return count;
 }

async function contactCountQuery(searchString: string) {
    const supabase = await createClient();
    const { count, error } = await supabase
        .from("contacts")
        .select("id", { count: "exact", head: true })
        .ilike("title", `%${searchString}%`);

    if (error) {
        throw new Error(error.message);
    }
    return count;
}*/

export async function POST(request: Request) {
  try {
    const { searchString, tag, page } = await request.json()
    console.log("Search Query:", searchString, "Tag:", tag, "Page:", page)

    const results: any = {
      pages: [],
      events: [],
      contacts: [],
    }

    const counts: any = {
      pages: 0,
      events: 0,
      contacts: 0,
    }

    if (tag === "Sisulehed" || tag === "Kõik") {
      results.pages = await pageQuery(searchString, page)
      counts.pages = await pageCountQuery(searchString, page)
    }

    if (tag === "Üritused" || tag === "Kõik") {
      results.events = await eventQuery(searchString, page)
      counts.events = await eventCountQuery(searchString, page)
    }

    if (tag === "Isikud" || tag === "Kõik") {
      results.contacts = await contactQuery(searchString, page)
      counts.contacts = await contactCountQuery(searchString, page)
    }

    console.log(results, counts)

    return NextResponse.json({
      success: true,
      data: results,
      count: counts,
    })
  } catch (error) {
    console.error("Supabase Error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 },
    )
  }
}
