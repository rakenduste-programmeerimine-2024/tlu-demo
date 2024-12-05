import ResultContact from "./result-contact"
import ResultPage from "./result-page"
import { Pages } from "./types"

interface Contact {
  name: string
  position: string
  institute: string
  phone: string
  email: string
  picture: string
  type: string
}

interface ResultListProps {
  results: Array<Pages>;
}

const testContacts: Contact[] = [
    {
      name: "Kristjan Mägi",
      position: "IT Spetsialist",
      institute: "Informaatika Instituut",
      phone: "+372 512 3456",
      email: "kristjan.magi@university.ee",
      picture: "https://avatar.iran.liara.run/public", // Replace with actual image URL if available
      type: "Kontakt"
    },
]

export default function ResultList({ results }: ResultListProps) {
  return (
    <>
      <div className="flex-1 flex flex-col gap-2">
        <ResultPage entries={results} />
        <ResultContact entries={testContacts} />
      </div>
    </>
  )
}
