import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full bg-gradient-to-tr from-eerie to-space border-t-8 border-t-bsg font-display justify-start md:justify-center items-start text-plat">
      <ul className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center px-3 pt-4 pb-4 md:p-3 text-lg md:text-xl">
        <li className="flex items-center justify-start md:justify-center p-1 md:m-2">
          <Link
            href="mailto:contact@gudspeedandfab.com"
            className="flex w-max hover:text-hugger"
          >
            <Image
              src="..\svg\envelope-solid.svg"
              width={20}
              height={20}
              alt="Email: "
              className="pr-1"
            />
            Contact@GudSpeedAndFab.com
          </Link>
        </li>

        <li className="flex items-center justify-start md:justify-center p-1 md:m-2">
          <Link
            href="https://github.com/gguditus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-max hover:text-hugger"
          >
            <Image
              src="..\svg\github.svg"
              width={20}
              height={20}
              alt="Github: "
              className="pr-1"
            />
            Made by Greg Guditus
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
