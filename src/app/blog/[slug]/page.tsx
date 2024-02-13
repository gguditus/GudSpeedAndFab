import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";

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

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} - Gud Speed and Fab - Car Blog - Build Gallery`;

  return {
    title: title,
    description: `Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery.`,
    openGraph: {
      title,
      description: `Guditus Speed and Fabrication is a website created to document the progress around the Guditus Garage. Follow along on the Blog or the Build Gallery.`,
      images: [post.ogImage.url],
      type: "website",
      url: `https://gudspeedandfab.com/blog/${post.slug}`,
    },
  };
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="bg-eerie text-plat min-h-screen flex flex-col justify-center">
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
