import React from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "@/src/constants";
import OptionalSlider from "@/src/components/OptionalSlider";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import Author from "./Author";
import Date from "./Date";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  images?: string | string[]
  children: React.ReactNode;
};
export default function PostLayout({
                                     title,
                                     date,
                                     slug,
                                     author,
                                     tags,
                                     description = "",
                                     images,
                                     children,
                                   }: Props) {
  const keywords = tags.map(it => getTag(it)?.name).filter(Boolean);
  const authorName = getAuthor(author)?.name;
  return (
    <>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className="pt-16">
        <div className="mx-auto max-w-3xl py-12 px-6 lg:px-8 lg:py-24">
          <Link href={ROUTES.BLOG} className="flex gap-1 text-indigo-600 items-center"><ArrowLongLeftIcon
            width={24}/> Zurück</Link>
          <article className="py-8 sm:py-16">
            <header className="text-center mb-12 sm:mb-16">
              <div className="text-base md:text-2xl font-semibold leading-7 text-indigo-600 mb-4">
                {tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">{title}</h1>
            </header>

            <div className="mx-auto flex justify-center">
              {images && <OptionalSlider images={images}/>}
            </div>

            <div className="mt-6">{children}</div>
            <footer className="mt-10 flex gap-4">
              <div>
                <Date date={date}/>
              </div>
              <div>
                <Author author={getAuthor(author)}/>
              </div>
            </footer>
            {/* <ul> */}
            {/*  {tags.map((it, i) => ( */}
            {/*    <li key={it[0]}> */}
            {/*      <TagButton tag={it[0]} /> */}
            {/*    </li> */}
            {/*  ))} */}
            {/* </ul> */}
          </article>
        </div>
      </div>
    </>
  );
}
