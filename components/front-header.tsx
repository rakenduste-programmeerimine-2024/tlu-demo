import Image from "next/image"
import Socialmedia from "./socialmedia-buttons";

export function MainLogo() {
    return (
      <div>
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
        <Socialmedia />
      </div>
    )
    
}

export default function FrontHeader() { 
    return (
      <>
        <div className="w-full flex items-center justify-center">
          <MainLogo />
        </div>
      </>
    );
}