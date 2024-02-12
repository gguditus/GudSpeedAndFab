import Head from "next/head";
import AllPosts from "../_components/all-posts";

export default function Posts() {
  return (
    <main className="bg-eerie flex flex-col justify-center items-center min-h-max w-full">
      <Head>
        <title>Blog - Gud Speed and Fab - Car Blog - Build Gallery</title>
        <meta
          property="og:title"
          content="Blog - Gud Speed and Fab - Car Blog - Build Gallery"
        />
        <link rel="canonical" href="https://gudspeedandfab.com/Blog" />
      </Head>
      <h1 className="font-stencil text-plat text-2xl md:text-3xl lg:text-4xl pt-20 mt-20 m-8">
        Blog
      </h1>
      <AllPosts />
    </main>
  );
}
