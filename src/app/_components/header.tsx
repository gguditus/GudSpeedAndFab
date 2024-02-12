import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-gradient-to-br from-eerie to-space fixed border-b-bsg border-b-8 shadow-lg font-stencil z-10">
      <div className="px-3 mx-auto md:items-center md:justify-between md:flex md:px-6">
        <div className="flex items-center justify-between py-1 md:py-3 my-1">
          {/* LOGO */}
          <Link href="/">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-hugger flex items-center justify-start text-left">
              Gud Speed and Fab
            </h1>
          </Link>

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-3 text-plat rounded-md outline-none focus:border-hugger focus:border-2 hover:bg-hugger"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image
                  src="/svg/close.svg"
                  width={25}
                  height={25}
                  alt="close"
                />
              ) : (
                <Image
                  src="/svg/bars.svg"
                  width={25}
                  height={25}
                  alt="menu"
                  className="focus:border-none active:border-none"
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-end m-2 md:block ${
            navbar ? "p-8 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-20 md:h-auto items-center justify-center md:items-end md:justify-end md:flex md:gap-2 pb-4 px-5 text-xl text-plat py-2 md:pb-4 text-center md:text-2xl lg:text-3xl">
            <li className="hover:text-hugger p-2 md:mx-2">
              <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                Blog
              </Link>
            </li>

            {/*<li className="hover:text-hugger p-2 md:mx-2">
              <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                Gallery
              </Link>
            </li>

            <li className="hover:text-hugger p-2 md:mx-2">
              <Link href="/about" onClick={() => setNavbar(!navbar)}>
                About
              </Link>
            </li>*/}

            <li className="hover:text-hugger p-2 md:mx-2">
              <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
