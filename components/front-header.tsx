"use client";

import Image from "next/image";
import { useState } from "react";
import LoginForm from "@/components/login/login-form";

export default function FrontHeader() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="w-full flex justify-center relative">
        {/* Logo Section */}
        <Image
          src="/logos/TLU-uldlogo.png"
          alt="Logo"
          width="300"
          height="60"
          className="block dark:hidden"
        />
        <Image
          src="/logos/TLU-uldlogo-valge.png"
          alt="Logo"
          width="300"
          height="60"
          className="hidden dark:block"
        />
      </div>
      <div className="absolute top-5 right-5 cursor-pointer">
        {/* User Icon */}
        <Image
          src="/icons/user.png"
          alt="User"
          width={20}
          height={20}
          onClick={() => setIsLoginOpen(!isLoginOpen)}
        />
        {/* Login Form */}
        {isLoginOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-64 p-4 z-10">
            <LoginForm message={{ message: "" }} />
          </div>
        )}
      </div>
    </div>
  );
}
