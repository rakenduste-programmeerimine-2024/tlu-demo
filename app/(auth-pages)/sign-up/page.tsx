"use client";
import { useState, useEffect } from "react";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup(props: { searchParams: Promise<Message> }) {
  const [password, setPassword] = useState("");
  const [missingRequirements, setMissingRequirements] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useState<Message | null>(null);

  // Retrieve searchParams once the component is mounted
  useEffect(() => {
    props.searchParams.then((params) => setSearchParams(params));
  }, [props.searchParams]);

  // Function to check password requirements
  const checkPasswordRequirements = (password: string) => {
    const requirements = [];
    if (!/[A-Z]/.test(password)) requirements.push("üht suurtähte");
    if (!/[a-z]/.test(password)) requirements.push("üht väiketähte");
    if (!/[0-9]/.test(password)) requirements.push("üht numbrit");
    if (!/[~`!@#$%^&*()_\-+{}[\]|:;<>,.?/]/.test(password)) requirements.push("üht sümbolit");
    if (password.length < 8) requirements.push("kaheksat märki");

    setMissingRequirements(requirements);
  };

  // Update password state and check requirements on input change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    checkPasswordRequirements(value);
  };

  if (searchParams && "message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-100 max-w-100 mx-auto">
        <h1 className="text-2xl font-medium">Loo kasutaja</h1>
        <p className="text-sm text text-foreground">
          Kas sul on juba kasutaja?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Logi sisse
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">E-mail</Label>
          <Input className="w-4/5" name="email" placeholder="mari@maasikas.com" required />
          <Label htmlFor="name">Sinu nimi</Label>
          <Input className="w-4/5" name="name" placeholder="Mari Maasikas" required />

          <Label htmlFor="password">Parool</Label>
          <div className="flex flex-col gap-2">
            <Input
              className={`w-4/5 ${missingRequirements.length > 0 ? "border-red-500" : ""}`}
              type="password"
              name="password"
              placeholder="Sinu parool"
              minLength={8}
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {missingRequirements.length > 0 && (
              <ul className="text-red-500 text-sm mt-1">
                {missingRequirements.map((req, index) => (
                  <li key={index}>Peab sisaldama vähemalt {req}.</li>
                ))}
              </ul>
            )}
          </div>

          <SubmitButton className="w-4/5" formAction={signUpAction} pendingText="Signing up...">
            Loo kasutaja
          </SubmitButton>
          {searchParams && <FormMessage message={searchParams} />}
        </div>
      </form>
    </>
  );
}
