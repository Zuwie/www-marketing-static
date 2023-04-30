import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import type { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import PostLayout from "../../components/PostLayout";

import { fetchPostContent } from "../../lib/posts";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  images?: string | string[]
  source: MDXRemoteSerializeResult;
};

const slugToPostContent = ((postContents) => {
  const hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post({title, dateString, slug, tags, author, description = "", source, images}: Props) {
  console.log("images", images)

  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      images={images}
      description={description}
    >
      <MDXRemote {...source} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => `/posts/${it.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object },
  });
  const mdxSource = await serialize(content);
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags,
      author: data.author,
      source: mdxSource,
      images: data.images,
    },
  };
};
