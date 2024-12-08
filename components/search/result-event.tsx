import { AiOutlineCalendar } from "react-icons/ai"
import { Events } from "./types"

interface ResultContentProps {
  entries: Events[]
}

export default function ResultEvents({ entries }: ResultContentProps) {
  return (
    <>
      {entries.map((entry, index) => (
        <div
          key={index}
          className="border-b-2 flex-1 flex items-center px-4 py-2 hover:border-tlured hover:shadow-lg transform hover:scale-105 transition duration-200 cursor-pointer"
        >
          <div>
            <h1 className="italic underline decoration-tlured text-lg">
              {entry.title}
            </h1>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">
                <AiOutlineCalendar className="mr-1" />
                Üritus
              </span>
              <span className="font-semibold text-sm">
                {new Date(entry.start_time).toLocaleString("et-EE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                -
                {new Date(entry.end_time).toLocaleString("et-EE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
