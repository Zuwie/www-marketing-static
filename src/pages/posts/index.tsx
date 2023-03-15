import { GetStaticProps } from "next";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  const pageUrl = "/posts";
  const pageTitle = "Alle Beiträge";

  return (
    <>
      <BasicMeta url={pageUrl} title={pageTitle} />
      <OpenGraphMeta url={pageUrl} title={pageTitle} />
      <TwitterCardMeta url={pageUrl} title={pageTitle} />

      <PostList posts={posts} tags={tags} pagination={pagination} />
    </>
  );
}


