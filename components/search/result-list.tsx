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
  // Check if all result arrays are empty
  const hasNoResults =
    results.pages &&
    results.pages.length === 0 &&
    results.events &&
    results.events.length === 0 &&
    results.contacts &&
    results.contacts.length === 0

  return (
    <div className="flex-1 flex flex-col gap-2">
      {/* If there are no results, display a message */}
      {hasNoResults ? (
        <p>Tulemusi ei leitud..</p>
      ) : (
        <>
          {results.pages && results.pages.length > 0 && (
            <ResultPage entries={results.pages} />
          )}

          {results.events && results.events.length > 0 && (
            <ResultEvents entries={results.events} />
          )}

          {results.contacts && results.contacts.length > 0 && (
            <ResultContact entries={results.contacts} />
          )}
        </>
      )}
    </div>
  )
}
