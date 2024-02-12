import { getAllPosts } from "../../lib/api";
import { PostCard } from "./post-card";

export function AllPosts() {
  const allPostsData = getAllPosts();
  return (
    <ul className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-stretch pb-3">
      {allPostsData.map(({ excerpt, date, title, slug, coverImage }) => (
        <li
          className="m-2 p-4 bg-space rounded text-plat font-display text-lg max-w-xs md:max-w-sm xl:max-w-md shadow-md hover:shadow-hugger"
          key={slug}
        >
          <PostCard
            excerpt={excerpt}
            date={date}
            title={title}
            slug={slug}
            coverImage={coverImage}
          />
        </li>
      ))}
    </ul>
  );
}

export default AllPosts;
