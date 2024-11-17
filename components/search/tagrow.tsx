import TagButton from "./tagbutton"; 

interface TagRowProps {
  buttons: string[]; 
}

export default function TagRow({ buttons }: TagRowProps) {
  return (
    <>
        <div className="flex-1 flex gap-6 px-4">
            {buttons.map((value, index) => (
                <TagButton key={index} label={value} />
            ))}
        </div>
    </>
  );
}