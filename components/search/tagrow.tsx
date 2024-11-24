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
      <div className="flex-1 flex gap-6 px-4">
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
