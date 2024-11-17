import Link from "next/link";
import { Button } from "./ui/button";
import Image from 'next/image';

export default function Socialmedia() {
  return (
    <>
      <div className="flex flex-row gap-1"> 
        <Link
          href="https://www.facebook.com/tallinna.ylikool/"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-white " size={"sm"}>
            <Image 
              src="/soc-logos/facebook-16.png"
              alt="Facebook logo"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <Link
          href="https://www.instagram.com/tallinnuniversity/"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-white " size={"sm"}>
            <Image 
              src="/soc-logos/instagram-6-16.png"
              alt="Instagram logo"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <Link
          href="https://www.youtube.com/user/TallinnaYlikool"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-white " size={"sm"}>
            <Image 
              src="/soc-logos/youtube-16.png"
              alt="youtube logo"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <Link
          href="https://www.flickr.com/photos/tallinnuniversity/albums"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-white " size={"sm"}>
            <Image 
              src="/soc-logos/flickr-16.png"
              alt="flickr logo"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <Link
          href="http://virtuaaltuur.tlu.ee"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-white " size={"sm"}>
            <Image 
              src="/soc-logos/instagram-16.png"
              alt="virtuaaltuur logo"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <Link
          href="https://www.tiktok.com/@tallinnuniversity"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-white " size={"sm"}>
            <Image 
              src="/soc-logos/tiktok-16.png"
              alt="tiktok logo"
              width={10}
              height={10}
            />
          </Button>
        </Link>
      </div>
    </>
  );
}
