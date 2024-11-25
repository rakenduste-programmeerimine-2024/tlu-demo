"use client"
import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const DtiSidebar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isDTIPage = pathname === "/dti"
  const [isOpen, setIsOpen] = useState<boolean>(isDTIPage)

  useEffect(() => {
    setIsOpen(isDTIPage)
  }, [isDTIPage])

  return (
    <div className="flex">
      <div
        className={`bg-gradient-to-b from-gradienttlured via-tlured to-gradienttlured text-white 
                    fixed h-screen transition-all 
                    duration-100 z-20
                    right-0
                    ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <button
              onClick={() => router.push("/")}
              className="text-white hover:text-gray-300"
            >
              Home
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={() => router.push("/aboutUs")}
              className="text-white 
                          hover:text-gray-300"
            >
              About
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={() => router.push("/dti")}
              className="text-white 
                          hover:text-gray-300"
            >
              DTI
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 p-4 
                        ${isOpen ? "ml-64" : "ml-0"}`}
      >
        <div className="ml-auto">
          <button
            className={`fixed top-4 
                    z-30 bg-black hover:bg-logored dark:bg-gradient-to-b dark:from-gradienttlured dark:from-1% dark:to-tlured dark:hover:bg-tlured
                       text-white font-bold py-2 px-4 rounded right-0 ${isOpen ? "right-64" : "right-4"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div>
          <button
            className="bg-black hover:bg-logored dark:bg-gradient-to-b dark:from-gradienttlured dark:from-1% dark:to-tlured dark:hover:bg-tlured
                       text-white font-bold py-2 px-4 rounded"
          ></button>
        </div>
      </div>
    </div>
  )
}

export default DtiSidebar
