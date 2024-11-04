"use client";
import { useState, useEffect } from "react";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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

    setMissingRequirements(requirements);
  };

  // Parooli state'i uuendamine ja tingimuste kontroll parooli muutudes
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    checkPasswordRequirements(value);
  };

  // Handle form submission
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

    // Parooli valideerimine
    if (missingRequirements.length > 0) {
      newErrors.password = "Parool ei vasta nõuetele";
      hasErrors = true;
    }

    setErrors(newErrors);

    // Vormi saatmine, kui erroreid pole
    if (!hasErrors) {
      signUpAction(new FormData(event.target as HTMLFormElement));
    }
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
      <form className="flex flex-col min-w-100 max-w-100 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium">Loo kasutaja</h1>
        <p className="text-sm text text-foreground">
          Kas sul on juba kasutaja?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Logi sisse
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">E-mail</Label>
          <Input
            className={`w-4/5 ${errors.email ? "border border-red-500" : ""}`}
            name="email"
            placeholder="mari@maasikas.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          <Label htmlFor="name">Sinu nimi</Label>
          <Input
            className={`w-4/5 ${errors.name ? "border border-red-500" : ""}`}
            name="name"
            placeholder="Mari Maasikas"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

          <Label htmlFor="password">Parool</Label>
          <div className="flex flex-col gap-2">
            <Input
              className={`w-4/5 ${errors.password ? "border border-red-500" : ""}`}
              type="password"
              name="password"
              placeholder="Sinu parool"
              minLength={8}
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
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

          <SubmitButton className="w-4/5" formAction={signUpAction} pendingText="Signing up...">
            Loo kasutaja
          </SubmitButton>
          {searchParams && <FormMessage message={searchParams} />}
        </div>
      </form>
    </>
  );
}
