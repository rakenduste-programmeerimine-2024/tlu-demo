"use client"

// Based on the following video: https://www.youtube.com/watch?v=7gzoI9PIfn8

import { useState, ChangeEvent, useEffect } from "react"
import useDebounce from "./debounce"
import { AiOutlineSearch } from "react-icons/ai"

type Results = {
  id: number
  title: string
}
// ChatGPT generated data for testing purposes, will be removed later.

const results: Results[] = [
  { id: 1, title: "Undergraduate Admissions" },
  { id: 2, title: "Graduate Admissions" },
  { id: 3, title: "International Admissions" },
  { id: 4, title: "Transfer Admissions" },
  { id: 5, title: "Admissions Deadlines and Requirements" },
  { id: 6, title: "Scholarships and Financial Aid" },
  { id: 7, title: "Undergraduate Programs" },
  { id: 8, title: "Graduate Programs" },
  { id: 9, title: "Online Programs" },
  { id: 10, title: "Course Catalog" },
  { id: 11, title: "Degree Requirements" },
  { id: 12, title: "Honors Program" },
  { id: 13, title: "Study Abroad Programs" },
  { id: 14, title: "Research Opportunities" },
  { id: 15, title: "College of Arts and Sciences" },
  { id: 16, title: "School of Business" },
  { id: 17, title: "College of Engineering and Technology" },
  { id: 18, title: "School of Education" },
  { id: 19, title: "College of Health Sciences" },
  { id: 20, title: "Department of Computer Science" },
  { id: 21, title: "Department of Psychology" },
  { id: 22, title: "Department of Mathematics and Statistics" },
  { id: 23, title: "Dining Services" },
  { id: 24, title: "Student Organizations" },
  { id: 25, title: "Campus Events Calendar" },
  { id: 26, title: "Health and Wellness Services" },
  { id: 27, title: "Career Services" },
  { id: 28, title: "Intramural Sports and Recreation" },
  { id: 29, title: "Student Conduct and Community Standards" },
  { id: 30, title: "Faculty Directory" },
  { id: 31, title: "Staff Directory" },
  { id: 32, title: "Faculty Research Profiles" },
  { id: 33, title: "Professional Development" },
  { id: 34, title: "Faculty Governance" },
  { id: 35, title: "HR and Payroll" },
  { id: 36, title: "IT Services for Staff" },
  { id: 37, title: "Research Centers and Institutes" },
  { id: 38, title: "Undergraduate Research Opportunities" },
  { id: 39, title: "Graduate Research Programs" },
  { id: 40, title: "Research Funding and Grants" },
  { id: 41, title: "Research Ethics and Compliance" },
  { id: 42, title: "IT Support Center" },
  { id: 43, title: "Campus Bookstore" },
  { id: 44, title: "Parking and Transportation" },
  { id: 45, title: "Campus Security and Safety" },
  { id: 46, title: "Counseling and Mental Health Services" },
  { id: 47, title: "Disability Services" },
  { id: 48, title: "Alumni Association" },
  { id: 49, title: "Giving and Donations" },
  { id: 50, title: "Alumni Events" },
  { id: 51, title: "Career Resources for Alumni" },
  { id: 52, title: "Donor Recognition" },
  { id: 53, title: "Mission and Vision" },
  { id: 54, title: "History and Heritage" },
  { id: 55, title: "University Leadership" },
  { id: 56, title: "Board of Trustees" },
  { id: 57, title: "Diversity and Inclusion" },
  { id: 58, title: "Sustainability Initiatives" },
  { id: 59, title: "Campus Map and Directions" },
  { id: 60, title: "University News" },
  { id: 61, title: "Upcoming Events" },
  { id: 62, title: "Press Releases" },
  { id: 63, title: "Media Relations" },
  { id: 64, title: "Graduation Ceremonies" },
  { id: 65, title: "Commencement Speakers" },
]

export default function SearchBar() {
  const [query, setQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<Results[]>([])

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      const filteredResults = results
        .filter(entry => entry.title.toLowerCase().includes(debouncedQuery.toLowerCase()))
        .slice(0, 8)
      setSearchResults(filteredResults)
    } else {
      setSearchResults([])
    }
  }, [debouncedQuery])
  
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <form className="w-[500px], relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Otsi lehelt"
            className="w-full p-4 rounded-full bg-slate-100 dark:bg-slate-800"
            onChange={handleSearch}
          ></input>
          {/*<button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full">
            <AiOutlineSearch />
          </button> */}
        </div>

        {searchResults.length > 0 && (
          <div className="absolute top-16 p-4 bg-slate-100 dark:bg-slate-800 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2, shadow-md">
            {searchResults.map(result => (
              <span key={result.id}>{result.title}</span>
            ))}
          </div>
        )}
      </form>
    </>
  )
}
