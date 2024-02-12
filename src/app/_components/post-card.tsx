import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostCard({ excerpt, date, title, slug, coverImage }: Props) {
  return (
    <div>
      <Link href={"/blog/" + slug}>
        <p className="text-2xl">{title}</p>
        <div className="text-bsg">
          <DateFormatter dateString={date} />
        </div>
        <Image
          src={coverImage}
          alt={title}
          priority
          blurDataURL="data:..."
          placeholder="blur"
          width={450}
          height={250}
          sizes="(max-width: 768px) 384px, (max-width: 1280px) 448px"
          className="w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl rounded my-6"
        />
        <p className="text-xl line-clamp-2">{excerpt}</p>
      </Link>
    </div>
  );
}

export default PostCard;
