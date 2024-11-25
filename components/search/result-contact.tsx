import {
  AiOutlineBank,
  AiOutlineContacts,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai"

interface Contact {
  name: string
  position: string
  institute: string
  phone: string
  email: string
  picture: string
  type: string
}

interface ResultContentProps {
  entries: Contact[]
}

export default function ResultContact({ entries }: ResultContentProps) {
  return (
    <>
      {entries.map((entry, index) => (
        <div
          key={index} //border 2 or border 4?
          className="border-b-2 flex-1 flex items-center px-4 py-2 hover:border-red-500 hover:shadow-lg transform hover:scale-105 transition duration-200 cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            
            <div>
                <h1 className="italic underline decoration-red-500 text-lg">
                {entry.name}
                </h1>
                <span className="inline-flex items-center bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">
                    <AiOutlineContacts className="mr-1" />
                    {entry.type}
                </span>
            </div>

            <div className="flex items-center gap-2">
                
              <img
                src={entry.picture}
                className="size-24"
              ></img>

              <div className="flex flex-1 flex-col">
                <span className="font-semibold text-sm">{entry.position}</span>
                {/*<span className="font-semibold text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-lg flex items-center">
                  <AiOutlineBank className="mr-2" />
                  {entry.institute}
                </span>*/}
                {/*<span className="font-semibold text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
                  {entry.institute}
                </span>*/}
                <span className="font-semibold text-sm border-l-4 border-red-500 pl-2">
                  {entry.institute}
                </span>
                {/*<span className="font-semibold text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-md border-l-4 border-red-500 pl-2">
                  {entry.institute}
                </span>*/}
                
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

          <div className="ml-auto">
            <AiOutlineLink className="size-5" />
          </div>

        </div>
      ))}
    </>
  )
}
