import ContactForm from "@/app/_components/contact-form";
import { Metadata } from "next";
import Image from "next/image";
import garageLitUp from "../public/assets/garageLitUp.webp";
import ThreePosts from "./_components/three-posts";

export const metadata: Metadata = {
  title: "Guditus Speed and Fabrication - Car Blog - Build Gallery",
  description: `Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery.`,
  openGraph: {
    title: "Guditus Speed and Fabrication - Car Blog - Build Gallery",
    description: `Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery.`,
    images: "./favicon/opengraph-image.jpg",
    type: "website",
    url: "https://gudspeedandfab.com",
  },
};

export default function Index() {
  return (
    <main className="bg-eerie text-plat min-h-screen flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center font-stencil text-hugger text-xl md:text-2xl lg:text-3xl 2xl:text-4xl pt-10 mt-10 lg:mt-12 xl:mt-14">
        <Image
          src={garageLitUp}
          alt="Guditus Garage Lit up at night"
          priority
          blurDataURL="data:..."
          placeholder="blur"
          sizes="50vw"
          className="w-full lg:rounded-md lg:m-10 duration-1000 lg:hover:scale-105 hover:shadow-hugger hover:shadow-md"
        />
        <h1 className="m-5 md:m-10">
          Welcome to Guditus Speed and Fabrication! This is a website created to
          document the progress of projects around the Guditus Garage.
          <br></br>
          Our projects include engine swaps, full blown body-off resto-mods,
          simple repairs, machine restorations, shop improvements, and working
          on anything with an engine.
          <br></br>
          Follow along on the Blog or the Build Gallery (Coming Soon).
        </h1>
      </div>

      <div className="flex flex-col font-display text-plat text-xl md:text-2xl lg:text-3xl 2xl:text-4xl m-2 md:m-5 lg:m-6 rounded bg-space shadow-md">
        <h2 className="m-3 md:m-5 lg:m-8">
          As with any project in the shop, this website is a work in progress.
          It was built with Next.JS and Tailwind and is hosted on Linode. All
          development was done by Greg Guditus.
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <h2 className="font-stencil text-hugger text-2xl md:text-3xl lg:text-4xl m-8">
          Blog
        </h2>
        <ThreePosts />
      </div>

      <div className="flex flex-row justify-center items-center p-1 my-3 lg:p-5 lg:m-5">
        <h2 className="text-hugger font-stencil text-2xl md:text-3xl xl:text-4xl m-3 min-w-max">
          Contact Greg here
        </h2>
        <div className="w-1/2 pr-1">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
