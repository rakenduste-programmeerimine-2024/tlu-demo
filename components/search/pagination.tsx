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
  
    pageList.push("1");

    if (currentPage < 1) {
        currentPage = 1 
    }

    if (currentPage > totalPages) {
        currentPage = totalPages
    }

    if (currentPage === 1) {
      pageList.push("2", "3", "...", (totalPages - 1).toString(), (totalPages).toString());
    } else if (currentPage === 2) {
      pageList.push("2", "3", "4", "...", (totalPages - 1).toString(), (totalPages).toString());
    } else if (currentPage === 3) {
      pageList.push("2", "3", "4", "5", "...", (totalPages - 1).toString(), (totalPages).toString());
    } else if (currentPage > 3 && currentPage < totalPages - 2) {
      pageList.push("...", (currentPage - 1).toString(), currentPage.toString(), (currentPage + 1).toString(), "...", (totalPages).toString() );
    } else if (currentPage === totalPages - 2) {
      pageList.push("...", (totalPages - 4).toString(), (totalPages - 3).toString(), (totalPages - 2).toString(), (totalPages - 1).toString(), (totalPages).toString());
    } else if (currentPage === totalPages - 1) {
      pageList.push("...", (totalPages - 3).toString(), (totalPages - 2).toString(), (totalPages - 1).toString(), (totalPages).toString());
    } else if (currentPage === totalPages) {
      pageList.push("...", (totalPages - 2).toString(), (totalPages - 1).toString(), (totalPages).toString());
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
              className={`p-2 w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 active:bg-blue-500 active:text-white
                ${currentPage === parseInt(value) ? "bg-slate-500 text-white" : ""}`}
              key={index}
              onClick={() => onPageChange(parseInt(value))}
            >
              {value}
            </button>
          ),
        )}
      </div>
    )
  }
