"use client"

import SearchBarNoFill from "@/components/search/search-bar-nofill"
import TagRow from "@/components/search/tagrow"
import { AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { FC, useState } from "react"
import ResultContent from "@/components/search/result-content"
import ResultList from "@/components/search/result-list"

const tags: string[] = ["Kõik", "Sisulehed", "Üritused", "Isikud"]

export default function SearchTest() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [query, setQuery] = useState(searchParams.get("query") || "")
  const [selectedTag, setSelectedTag] = useState(
    searchParams.get("tag") || "Kõik",
  )

  function updateSearchParams(params: Record<string, string | null>) {
    const newSearchParams = new URLSearchParams(searchParams)

    for (const [key, value] of Object.entries(params)) {
      if (value) {
        newSearchParams.set(key, value)
      } else {
        newSearchParams.delete(key)
      }
    }

    const orderedParams = new URLSearchParams()
    if (newSearchParams.has("query")) {
      orderedParams.set("query", newSearchParams.get("query")!)
    }
    if (newSearchParams.has("tag")) {
      orderedParams.set("tag", newSearchParams.get("tag")!)
    }

    replace(`${pathname}?${orderedParams.toString()}`)
  }

  function handleSearchChange(term: string) {
    setQuery(term)
    updateSearchParams({ query: term })
  }

  function handleTagChange(tag: string) {
    setSelectedTag(tag)
    updateSearchParams({ tag })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    updateSearchParams({ query, tag: selectedTag })
  }

  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4 items-center">
        <form
          className="w-full max-w-[500px] flex-1 flex flex-col gap-6 px-4 relative"
          onSubmit={handleSubmit}
        >
          <SearchBarNoFill
            value={query}
            onChange={handleSearchChange}
          />

          <TagRow
            buttons={tags}
            selectedTag={selectedTag}
            onTagChange={handleTagChange}
          />

          <div className="flex justify-center">
            <button className="relative p-4 w-2/3 h-8 rounded-full bg-white border-solid border-2 border-slate-800 flex items-center hover:bg-slate-500 text-black">
              <AiOutlineSearch className="absolute left-4" />
              <span className="mx-auto">Otsi</span>
            </button>
          </div>
        </form>

        <ResultList />
      </main>
    </>
  )
}
