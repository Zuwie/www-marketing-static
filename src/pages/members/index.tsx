import { IMember } from "@/src/pages/members/model";
import Member from "@/src/components/Member";
import { getFileContent } from "@/src/lib/server";
import BasicMeta from "@/src/components/meta/BasicMeta";
import OpenGraphMeta from "@/src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/src/components/meta/TwitterCardMeta";

export async function getStaticProps() {
  const data = getFileContent("content/members.yml")

  return {
    props: data
  }
}

interface MembersPageProps {
  title: string;
  intro: string;
  members: IMember[];
}

export default function Index({title, intro, members}: MembersPageProps) {
  const url = "/members";

  return (
    <>
      <BasicMeta url={url} title={title}/>
      <OpenGraphMeta url={url} title={title}/>
      <TwitterCardMeta url={url} title={title}/>
      <div className="pt-16">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
              <p className="text-xl text-gray-500">{intro}</p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {members && members.map((member: IMember) => (
                  <li key={member.name}>
                    <Member data={member}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
