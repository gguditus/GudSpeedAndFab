import ContactForm from "@/app/_components/contact-form";
import Head from "next/head";
import Image from "next/image";
import garageLitUp from "../../public/assets/garageLitUp.webp";

export default function Contact() {
  return (
    <main className="bg-eerie flex flex-col justify-center items-center min-h-screen w-full">
      <Head>
        <title>Contact - Gud Speed and Fab - Car Blog - Build Gallery</title>
        <meta
          property="og:title"
          content="Contact - Gud Speed and Fab - Car Blog - Build Gallery"
        />
        <link rel="canonical" href="https://gudspeedandfab.com/contact" />
      </Head>
      <div className="flex flex-row justify-center items-center font-stencil text-hugger text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl py-5 mt-14 xl:mt-20 m-5">
        <Image
          src={garageLitUp}
          alt="Guditus Garage Lit up at night"
          priority
          blurDataURL="data:..."
          placeholder="blur"
          sizes="35vw"
          className="w-full rounded-md lg:m-10"
        />
        <h1 className="m-5 md:min-w-max">Contact Greg here:</h1>
      </div>
      <div className="w-1/2 pb-5">
        <ContactForm />
      </div>
    </main>
  );
}
