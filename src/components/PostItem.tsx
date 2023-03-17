import Link from "next/link";
import { PostContent } from "../lib/posts";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article
        key={post.slug}
        className="group relative isolate flex flex-col justify-end overflow-hidden shadow-lg hover:shadow-2xl transition-all rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img src={post.banner} alt=""
             className="absolute inset-0 -z-10 h-full w-full object-cover transition-all group-hover:scale-105 origin-top-left"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>

        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {/* <Date date={parseISO(post.date)} /> */}
          {new Date(post.date).toLocaleDateString("de-DE", {
            weekday: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric"
          })}
          <div className="-ml-4 flex items-center gap-x-4 ml-2">
            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx={1} cy={1} r={1}/>
            </svg>
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
          <div>
            <span className="absolute inset-0"/>
            {post.title}
          </div>
        </h3>
      </article>
    </Link>
  );
}
