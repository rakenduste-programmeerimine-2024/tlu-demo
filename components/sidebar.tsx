"use client"
import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ThemeSwitcher } from "./theme-switcher"
import LoginButton from "./login/login-form"

const Sidebar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
	const isMainPage = pathname === "/"
  const [isOpen, setIsOpen] = useState<boolean>(isMainPage)

  useEffect(() => {
    setIsOpen(isMainPage)
  }, [isMainPage])

  return (
		<div className="flex">
			<div
				className={`bg-gradient-to-b from-gradienttlured via-tlured to-gradienttlured text-white 
                    fixed h-screen transition-all 
                    duration-100 z-10
                    ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
			>
				<div className="flex flex-col items-center">
					<div className="mt-4">
						<button onClick={() => router.push("/")} className="text-white hover:text-gray-300">
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
        </div>
      </div>

			<div
				className={`flex-1 p-4 
                        ${isOpen ? "ml-64" : "ml-0"}`}
			>
				<div className="ml-auto">
					<button
						className="bg-black hover:bg-logored dark:bg-gradient-to-b dark:from-gradienttlured dark:from-1% dark:to-tlured dark:hover:bg-tlured
                       text-white font-bold py-2 px-4 rounded"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						)}
					</button>
				</div>
				<div>
					<button
						onClick={() => router.push("/test/search")}
						className="bg-black hover:bg-logored dark:bg-gradient-to-b dark:from-gradienttlured dark:from-1% dark:to-tlured dark:hover:bg-tlured
                       text-white font-bold py-2 px-4 rounded mt-2"
					>
						OTSI
					</button>
				</div>
				<div
					className="bg-black hover:bg-logored dark:bg-gradient-to-b dark:from-gradienttlured dark:from-1% dark:to-tlured dark:hover:bg-tlured
                       text-white font-bold py-2 px-4 rounded mt-2"
				>
					<ThemeSwitcher />
				</div>
				<div
					className="bg-black hover:bg-logored dark:bg-gradient-to-b dark:from-gradienttlured dark:from-1% dark:to-tlured dark:hover:bg-tlured
                       text-white font-bold py-2 px-4 rounded mt-2"
				>
					<LoginButton />
				</div>
			</div>
		</div>
  );
}

export default Sidebar
