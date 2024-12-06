import ResultContact from "./result-contact"
import ResultEvents from "./result-event"
import ResultPage from "./result-page"
import { Pages, Events, Contacts } from "./types"

interface ResultListProps {
  results: {
    pages: Pages[]
    events: Events[]
    contacts: Contacts[]
  }
}

export default function ResultList({ results }: ResultListProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">

      {results.pages && results.pages.length > 0 && (
        <ResultPage entries={results.pages} />
      )}
      
      {results.events && results.events.length > 0 && (
        <ResultEvents entries={results.events} />
      )}

      {results.contacts && results.contacts.length > 0 && (
        <ResultContact entries={results.contacts} />
      )}
    </div>
  )
}