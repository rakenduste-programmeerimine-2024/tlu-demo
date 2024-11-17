import Hero from "@/components/hero"
import SearchBar from "@/components/search/search-bar"
import TagRow from "@/components/search/tagrow"

const tags: string[] = ['Lehed', 'Sisulehed', 'Üritused', 'Isikud']

export default function SearchTest() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <SearchBar />
        <TagRow buttons={tags}/>
      </main>
    </>
  )
}
