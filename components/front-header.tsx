import Image from "next/image"
import Socialmedia from "./socialmedia-buttons"
import { ThemeSwitcher } from "./theme-switcher"

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
    </div>
  )
}

export default function FrontHeader() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <MainLogo />
        <Socialmedia />
      </div>
      <div className="items-end">
        <ThemeSwitcher />
      </div>
    </>
  )
}
