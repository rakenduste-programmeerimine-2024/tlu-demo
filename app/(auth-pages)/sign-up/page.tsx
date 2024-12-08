"use client";
import { useState, useEffect } from "react";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image"; // Import Image component from next/image

export default function Signup(props: { searchParams: Promise<Message> }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [missingRequirements, setMissingRequirements] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useState<Message | null>(null);
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
  });

  useEffect(() => {
    props.searchParams.then((params) => setSearchParams(params));
  }, [props.searchParams]);

  // Parooli kontrollimise funktsioon
  const checkPasswordRequirements = (password: string) => {
    const requirements = [];
    if (!/[A-Z]/.test(password)) requirements.push("üht suurtähte");
    if (!/[a-z]/.test(password)) requirements.push("üht väiketähte");
    if (!/[0-9]/.test(password)) requirements.push("üht numbrit");
    if (!/[~`!@#$%^&*()_\-+{}[\]|:;<>,.?/]/.test(password)) requirements.push("üht sümbolit");
    if (password.length < 8) requirements.push("kaheksat märki");

    return requirements;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let hasErrors = false;
    const newErrors = { email: "", name: "", password: "" };

    // E-maili valideerimine
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "E-mail on nõutud";
      hasErrors = true;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Sisesta korrektne e-maili aadress";
      hasErrors = true;
    }

    // Nime valideerimine
    if (!name) {
      newErrors.name = "Nimi on nõutud";
      hasErrors = true;
    }

    // Parooli valideerimine ainult saatmisel
    const requirements = checkPasswordRequirements(password);
    if (requirements.length > 0) {
      newErrors.password = "Parool ei vasta nõuetele";
      setMissingRequirements(requirements);
      hasErrors = true;
    } else {
      setMissingRequirements([]);
    }

    setErrors(newErrors);

    // Vormi saatmine, kui erroreid pole
    if (!hasErrors) {
      signUpAction(new FormData(event.target as HTMLFormElement));
    }
  };

  return (
    <>
      <form className="flex-1 flex flex-col min-w-64" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium">Loo kasutaja</h1>
        <p className="text-sm text text-foreground">
          Kas sul on juba kasutaja?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Logi sisse
          </Link>
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col w-full">
            <Label htmlFor="email">E-mail</Label>
            <Input
              className={`flex items-center w-[90%] ${errors.email ? "border border-red-500" : ""}`}
              name="email"
              placeholder="mari@maasikas.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="flex flex-col w-full">
            <Label htmlFor="name">Sinu nimi</Label>
            <Input
              className={`flex items-center w-[90%] ${errors.name ? "border border-red-500" : ""}`}
              name="name"
              placeholder="Mari Maasikas"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="flex flex-col w-full">
            <Label htmlFor="password">Parool</Label>
            <div className="flex justify-between items-center">
              <Input
                className={`flex justify-between items-center ${errors.password ? "border border-red-500" : ""}`}
                type="password"
                name="password"
                placeholder="Sinu parool"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="tooltip relative inline-block ml-2">
                <Image
                  src="/icons/info-icon.png" // Image path directly from public folder
                  alt="Password Info"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <span className="tooltip-text absolute bg-gray-700 text-white p-2 rounded text-xs mt-1 hidden">
                  Parool peab sisaldama vähemalt üht suurtähte, üht väiketähte, üht numbrit, üht sümbolit ja olema vähemalt 8 tähemärki.
                </span>
              </div>
            </div>
            {errors.password && (
              <>
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                <ul className="text-red-500 text-sm mt-1">
                  {missingRequirements.map((req, index) => (
                    <li key={index}>Peab sisaldama vähemalt {req}.</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <SubmitButton className="flex items-center w-[90%]" formAction={signUpAction} pendingText="Signing up...">
            Loo kasutaja
          </SubmitButton>
          {searchParams && <FormMessage message={searchParams} />}
        </div>
      </form>
      <style jsx>{`
        .tooltip {
          margin-left: 8px; /* Add space between image and input field */
        }
        .tooltip:hover .tooltip-text {
          display: block;
          width: 200px; 
          padding: 8px 12px;
          white-space: normal;
        }
        .tooltip-text {
          text-align: left;
          line-height: 1.4; 
        }
      `}</style>
    </>
  );
}
