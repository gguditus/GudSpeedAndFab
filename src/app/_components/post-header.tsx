import Image from "next/image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

export function PostHeader({ title, coverImage, date, excerpt }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-left font-stencil p-5 pt-10 mt-10 lg:mt-20">
        <h1 className="text-plat text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl mx-1 pt-10">
          {title}
        </h1>
        <div className="text-bsg font-display text-lg md:text-xl lg:text-2xl 2xl:text-3xl mx-1">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center font-stencil text-hugger text-xl md:text-2xl lg:text-3xl 2xl:text-4xl p-2 m-3 md:m-5 rounded bg-space">
        <Image
          src={coverImage}
          alt="my 1969 Corvette convertible in Monaco (Hugger) Orange"
          priority
          blurDataURL="data:..."
          placeholder="blur"
          width="2000"
          height="1000"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-prose lg:rounded-md mb-10 lg:my-3 lg:mr-10 lg:ml-1 duration-1000 lg:hover:scale-105 hover:shadow-hugger hover:shadow-md"
        />
        <h2 className="max-w-prose lg:m-5">{excerpt}</h2>
      </div>
    </div>
  );
}
