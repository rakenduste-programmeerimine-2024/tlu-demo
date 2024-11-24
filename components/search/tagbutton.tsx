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
        w-1/2 
        rounded-full 
        border-solid border-2
        ${isSelected ? "bg-red-500 text-white" : "border-red-500 hover:bg-red-400"}
      `}
      >
        {label}
      </button>
    </>
  )
}
