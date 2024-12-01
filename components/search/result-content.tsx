import {
  AiOutlineCalendar,
  AiOutlineFileText,
} from "react-icons/ai"

interface Entry {
  title: string
  start_date: string
  end_date: string
  type: string
}

interface ResultContentProps {
  entries: Entry[]
}

export default function ResultContent({ entries }: ResultContentProps) {
  return (
    <>
      {entries.map((entry, index) => (
        <div
          key={index} //border 2 or border 4?
          className="border-b-2 flex-1 flex items-center px-4 py-2 hover:border-red-500 hover:shadow-lg transform hover:scale-105 transition duration-200 cursor-pointer"
        >
          <div>
            <h1 className="italic underline decoration-red-500 text-lg">
              {entry.title}
            </h1>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">
                {entry.type === "Üritus" ? (
                  <AiOutlineCalendar className="mr-1" />
                ) : entry.type === "Sisuleht" ? (
                  <AiOutlineFileText className="mr-1" />
                ) : (
                  entry.type
                )}
                {entry.type}
              </span>
              <span className="font-semibold text-sm">
                {entry.start_date === entry.end_date
                  ? entry.start_date
                  : `${entry.start_date} - ${entry.end_date}`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
