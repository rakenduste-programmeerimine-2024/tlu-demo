"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  className,
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      {...props}
      className={clsx(
        "bg-red-500 text-white py-2 rounded-md hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300",
        className // Allows for overriding styles if needed
      )}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
