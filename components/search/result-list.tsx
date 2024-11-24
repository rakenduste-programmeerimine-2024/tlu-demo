import ResultContent from "./result-content";

interface Entry {
    title: string
    start_date: string
    end_date: string
  }
  
  const testEntries: Entry[] = [
    { title: "Ülikooli aastapäev", start_date: "01.12.2024", end_date: "01.12.2024" }, // Same date
    { title: "Teaduskonverents: Innovatsioon tulevikus", start_date: "05.12.2024", end_date: "06.12.2024" },
    { title: "Tudengite talvepäevad", start_date: "10.01.2025", end_date: "12.01.2025" },
    { title: "Rahvusvaheline teadusnädal", start_date: "15.02.2025", end_date: "19.02.2025" },
    { title: "Praktilised töötuba: Andmeanalüüs", start_date: "25.03.2025", end_date: "26.03.2025" },
    { title: "Blogi postitus: Tudengielu kevadel", start_date: "01.04.2025", end_date: "01.04.2025" }, // Same date
    { title: "Lõputööde esitluspäevad", start_date: "05.05.2025", end_date: "07.05.2025" },
    { title: "Ülikooli spordifestival", start_date: "15.06.2025", end_date: "16.06.2025" },
    { title: "Eksamiperioodi algus", start_date: "20.06.2025", end_date: "30.06.2025" },
    { title: "Avatud uste nädal", start_date: "01.09.2025", end_date: "05.09.2025" },
  ]

export default function ResultList() {
    return (
        <>
            <ResultContent entries={testEntries}/>
        </>
    )
}