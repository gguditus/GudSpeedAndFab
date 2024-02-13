import { Metadata } from "next";
import AllPosts from "../_components/all-posts";

export const metadata: Metadata = {
  title: "Blog - Gud Speed and Fab - Car Blog - Build Gallery",
  description: `Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery.`,
  openGraph: {
    title: "Blog - Gud Speed and Fab - Car Blog - Build Gallery",
    description: `Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery.`,
    images: "./favicon/opengraph-image.jpg",
    type: "website",
    url: "https://gudspeedandfab.com",
  },
};

export default function Posts() {
  return (
    <main className="bg-eerie flex flex-col justify-center items-center min-h-max w-full">
      <h1 className="font-stencil text-plat text-2xl md:text-3xl lg:text-4xl pt-20 mt-20 m-8">
        Blog
      </h1>
      <AllPosts />
    </main>
  );
}
