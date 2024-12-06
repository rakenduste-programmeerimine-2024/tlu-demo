"use client"

// Based on the following video: https://www.youtube.com/watch?v=7gzoI9PIfn8

import { useState, ChangeEvent, useEffect } from "react"
import useDebounce from "./debounce"
import { AiOutlineSearch } from "react-icons/ai"

type Results = {
  id: number
  title: string
}

export default function SearchBar() {
  const [query, setQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<Results[]>([])

  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedQuery) {
        try {
          const response = await fetch("/api/searchbar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ searchString: debouncedQuery }),
          })

          const data = await response.json()
          console.log(data)
          if (data.success) {
            setSearchResults(data.data)
          } else {
            console.error("Failed to fetch results:", data.error)
            setSearchResults([])
          }
        } catch (error) {
          console.error("Fetch error:", error)
          setSearchResults([])
        }
      } else {
        setSearchResults([])
      }
    }

    fetchData()
  }, [debouncedQuery])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <form className="w-[500px] relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Otsi lehelt"
            className="w-full p-4 rounded-full bg-slate-100 dark:bg-slate-800"
            onChange={handleSearch}
          ></input>
          {/*<button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full">
            <AiOutlineSearch />
          </button> */}
        </div>

        {searchResults.length > 0 && (
          <div className="absolute top-16 p-4 bg-slate-100 dark:bg-slate-800 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2, shadow-md">
            {searchResults.map(result => (
              <span key={result.id}>{result.title}</span>
            ))}
          </div>
        )}
      </form>
    </>
  )
}
