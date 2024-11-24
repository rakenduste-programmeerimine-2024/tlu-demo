import { AiOutlineLink } from "react-icons/ai"

interface Entry {
  title: string
  start_date: string
  end_date: string
}

interface ResultContentProps {
  entries: Entry[]
}

export default function ResultContent({ entries }: ResultContentProps) {
  return (
    <>
      {entries.map((entry, index) => (
        <div
          key={index}
          className="border-b-2 flex-1 flex items-center"
        >
          <div>
            <h1 className="italic underline decoration-red-500 text-lg">
              {entry.title}
            </h1>
            <span className="font-semibold text-sm">
              {entry.start_date === entry.end_date
                ? entry.start_date
                : `${entry.start_date} - ${entry.end_date}`}
            </span>
          </div>
          <div className="ml-auto">
            <AiOutlineLink className="size-5" />
          </div>
        </div>
      ))}
    </>
  )
}
