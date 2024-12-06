import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  let pageList: string[] = []

  pageList.push("1")

  if (currentPage < 1) {
    currentPage = 1
  }

  if (currentPage > totalPages) {
    currentPage = totalPages
  }

  if (totalPages <= 5) {
    for (let i = 2; i <= totalPages; i++) {
      pageList.push(i.toString())
    }
  } else {
    if (currentPage > 3) {
      pageList.push("...")
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i !== 1 && i !== totalPages) {
        pageList.push(i.toString())
      }
    }

    if (currentPage < totalPages - 2) {
      pageList.push("...")
    }

    pageList.push(totalPages.toString())
  }

  return (
    <div className="flex gap-2 justify-center">
      {pageList.map((value, index) =>
        value === "..." ? (
          <span
            className="p-2 w-10 h-10 flex items-center justify-center text-gray-500"
            key={index}
          >
            {value}
          </span>
        ) : (
          <button
            className={`p-2 w-10 h-10 rounded-full border border-gray-300 
          ${
            currentPage === parseInt(value)
              ? "bg-tlured text-white"
              : "hover:bg-gray-100 hover:text-gray-700"
          } 
          ${
            currentPage === parseInt(value)
              ? "cursor-default"
              : "cursor-pointer"
          } 
          transition duration-200 ease-in-out`}
            key={index}
            onClick={() => onPageChange(parseInt(value))}
            disabled={currentPage === parseInt(value)}
          >
            {value}
          </button>
        ),
      )}
    </div>
  )
}
