import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
// import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({posts, pagination}: Props) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Bleib darüber informiert was bei den WWW so passiert.
          </p>
        </div>

        {/*<ul className="flex gap-2">*/}
        {/*  {tags.map((it) => (*/}
        {/*    <li key={it.slug}>*/}
        {/*      <TagLink tag={it} />*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}

        <ul
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostItem post={post} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
    </div>
  );
}
