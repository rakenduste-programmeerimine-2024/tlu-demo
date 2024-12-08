import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";



export function LoginForm({ message, onClose }: { message?: Message, onClose: () => void }) {
  const defaultMessage: Message = { message: "" }; // Default to an empty message

  return (
		<form className="flex-1 flex flex-col min-w-64">
			<button type="button" onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" aria-label="Close">
				✖
			</button>
			<h1 className="text-2xl font-medium text-black">Logi sisse</h1>
			<p className="text-sm text-black">
				Ei ole veel kasutajat?{" "}
				<Link className="text-black font-medium underline" href="/sign-up">
					Registreeru
				</Link>
			</p>
			<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 w-5/6">
				<Label htmlFor="email" className="text-black">
					E-mail
				</Label>
				<Input
					name="email"
					placeholder="mari@maasikas.com"
					required
					className="w-full bg-white text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
				/>
				<div className="flex justify-between items-center">
					<Label htmlFor="password" className="text-black">
						Parool
					</Label>
					<Link className="text-xs text-black underline" href="/forgot-password">
						Unustasid parooli?
					</Link>
				</div>
				<Input
					type="password"
					name="password"
					placeholder="Sinu parool"
					required
					className="w-full bg-white text-black placeholder-gray-500 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
				/>
				<SubmitButton pendingText="Sisse logimine..." formAction={signInAction}>
					Logi sisse
				</SubmitButton>
				<FormMessage message={message || defaultMessage} />
			</div>
		</form>
  );

}


export default function LoginButton() {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
 const handleClose = () => {
		setIsLoginOpen(false);
 };
	return (
    <div
      className="relative flex items-center justify-center"
      onClick={() => setIsLoginOpen(!isLoginOpen)}
    >
      <Image
        src="/icons/user.png"
        alt="User"
        width={20}
        height={20}
        className="cursor-pointer"
      />
      {/* Login Form */}
      {isLoginOpen && (
        <div className="absolute left-16 top-0 mt-2 bg-white shadow-md rounded-md w-64 p-4 z-10">
          <LoginForm
            message={{ message: "" }}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  )
}
