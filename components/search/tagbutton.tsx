interface TagButtonProps {
    label: string;
}

export default function TagButton({ label }: TagButtonProps) {
    return (
        <>
            <button 
                className="
                w-1/2 
                rounded-full 
                border-solid border-2 border-red-500
                hover:bg-red-400
                ">
                {label}
            </button>
        </>
    )
  }