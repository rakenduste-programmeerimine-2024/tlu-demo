import ResultContact from "./result-contact"
import ResultContent from "./result-content"

interface Contact {
  name: string
  position: string
  institute: string
  phone: string
  email: string
  picture: string
  type: string
}

interface Entry {
  title: string
  start_date: string
  end_date: string
  type: string
}

const testEntries: Entry[] = [
  {
    title: "Ülikooli aastapäev",
    start_date: "01.12.2024",
    end_date: "01.12.2024",
    type: "Üritus", // A single-day event
  },
  {
    title: "Teaduskonverents: Innovatsioon tulevikus",
    start_date: "05.12.2024",
    end_date: "06.12.2024",
    type: "Üritus", // A multi-day event
  },
  {
    title: "Tudengite talvepäevad",
    start_date: "10.01.2025",
    end_date: "12.01.2025",
    type: "Üritus", // A student winter event
  },
  {
    title: "Rahvusvaheline teadusnädal",
    start_date: "15.02.2025",
    end_date: "19.02.2025",
    type: "Üritus", // A week-long event
  },
  {
    title: "Praktilised töötuba: Andmeanalüüs",
    start_date: "25.03.2025",
    end_date: "26.03.2025",
    type: "Sisuleht", // A practical workshop
  },
  {
    title: "Blogi postitus: Tudengielu kevadel",
    start_date: "01.04.2025",
    end_date: "01.04.2025",
    type: "Sisuleht", // Blog content
  },
  {
    title: "Lõputööde esitluspäevad",
    start_date: "05.05.2025",
    end_date: "07.05.2025",
    type: "Üritus", // Graduation presentation event
  },
  {
    title: "Ülikooli spordifestival",
    start_date: "15.06.2025",
    end_date: "16.06.2025",
    type: "Üritus", // Sports festival
  },
  {
    title: "Eksamiperioodi algus",
    start_date: "20.06.2025",
    end_date: "30.06.2025",
    type: "Sisuleht", // Informational page about the exam period
  },
  {
    title: "Avatud uste nädal",
    start_date: "01.09.2025",
    end_date: "05.09.2025",
    type: "Üritus", // Open house event
  }
]

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

export default function ResultList() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-2">
        <ResultContent entries={testEntries} />
        <ResultContact entries={testContacts} />
      </div>
    </>
  )
}
