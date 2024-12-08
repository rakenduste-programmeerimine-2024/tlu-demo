interface TagButtonProps {
  label: string
  isSelected: boolean
  onClick: () => void
}

export default function TagButton({
  label,
  isSelected,
  onClick,
}: TagButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
            flex-1 
            min-w-[100px] 
            rounded-full 
            border-solid border-2 
            py-2 px-4 
            text-center
            text-sm
            whitespace-nowrap 
        ${isSelected ? "bg-tlured text-white shadow-lg transform scale-95" : "border-red-500 hover:bg-tlured hover:text-white"}
      `}
      >
        {label}
      </button>
    </>
  )
}
