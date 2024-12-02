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
        "bg-tlured text-white py-2 rounded-md hover:bg-logored active:bg-tlured focus:outline-none focus:ring focus:ring-red-300",
        className // Allows for overriding styles if needed
      )}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
