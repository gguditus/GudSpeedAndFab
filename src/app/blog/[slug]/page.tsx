import Head from "next/head";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const pageTitle =
    post.title + " - Gud Speed and Fab - Car Blog - Build Gallery";
  const pageLink = "https://gudspeedandfab.com/blog/" + post.slug;

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="bg-eerie text-plat min-h-screen flex flex-col justify-center">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <link rel="canonical" href={pageLink} />
      </Head>
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          excerpt={post.excerpt}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
