import authors from "../../meta/authors.yml";

export type AuthorContent = {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
};

function generateAuthorMap(): { [key: string]: AuthorContent } {
  const result: { [key: string]: AuthorContent } = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap();

export function getAuthor(slug: string) {
  return authorMap[slug];
}
