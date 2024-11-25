import TagButton from "./tagbutton"

interface TagRowProps {
  buttons: string[]
  selectedTag: string
  onTagChange: (tag: string) => void
}

export default function TagRow({
  buttons,
  selectedTag,
  onTagChange,
}: TagRowProps) {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {buttons.map((value, index) => (
          <TagButton
            key={index}
            label={value}
            isSelected={value === selectedTag}
            onClick={() => onTagChange(value)}
          />
        ))}
      </div>
    </>
  )
}
