import Link from "next/link";
import { Button } from "./ui/button";
import Image from 'next/image';

export default function Socialmedia() {
  return (
    <>
      <div className="flex flex-row gap-1 justify-center border rounded p-7 border-solid dark:border-0">
        <Link
          href="https://euraxess.ec.europa.eu"
          target="_blank"
        >
          <Button className="flex items-center gap-2 p-7 bg-white " size={"sm"} >
            <Image 
              src="/foot-logos/euraxess.png"
              alt="euraxess logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://www.unica-network.eu"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/unica.png"
              alt="unica logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://www.eua.eu"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/eua.png"
              alt="eua logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://www.magna-charta.org"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/observatory.png"
              alt="magna-charta logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://www.uu.se/en/collaboration-innovation/the-baltic-university-programme/"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/bup.jpg"
              alt="bup logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://haka.ee/kutsekoolile/hindamisotsused-ja-aruanded/"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/accredited.png"
              alt="accredited logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://www.educationestonia.org"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/education-estonia-01.png"
              alt="education estonia logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
        <Link
          href="https://www.filmeu.eu"
          target="_blank"
        >
          <Button className="flex items-center p-7 gap-2 bg-white " size={"sm"}>
            <Image 
              src="/foot-logos/filmeu-01.png"
              alt="tiktok logo"
              width={50}
              height={50}
            />
          </Button>
        </Link>
      </div>
    </>
  )
}
