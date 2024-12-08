import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai"
import { Contacts } from "./types"

interface ResultContentProps {
  entries: Contacts[]
}

export default function ResultContact({ entries }: ResultContentProps) {
  return (
    <>
      {entries.map((entry, index) => (
        <div
          key={index} //border 2 or border 4?
          className="border-b-2 flex-1 flex items-center px-4 py-2 hover:border-tlured hover:shadow-lg transform hover:scale-105 transition duration-200 cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            <div>
              <h1 className="italic underline decoration-tlured text-lg">
                {entry.name}
              </h1>
              <span className="inline-flex items-center bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">
                <AiOutlineContacts className="mr-1" />
                Isik
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={entry.picture}
                className="size-24"
              ></img>

              <div className="flex flex-1 flex-col">
                <span className="font-semibold text-sm">{entry.position}</span>
                <span className="font-semibold text-sm border-l-4 border-tlured pl-2">
                  {entry.institute}
                </span>

                <span className="font-semibold text-sm flex items-center">
                  <AiOutlinePhone className="mr-2" />
                  {entry.phone}
                </span>
                <span className="font-semibold text-sm flex items-center">
                  <AiOutlineMail className="mr-2" /> {entry.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
