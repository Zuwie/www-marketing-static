import BasicMeta from "@/src/components/meta/BasicMeta";
import OpenGraphMeta from "@/src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/src/components/meta/TwitterCardMeta";
import { getFileContent } from "@/src/lib/server";

export async function getStaticProps() {
  const data = getFileContent("content/calender.yml")
  return {
    props: JSON.parse(JSON.stringify(data))
  }
}

interface CalenderPageProps {
  title: string;
  intro: string;
}

export default function Index({title, intro}: CalenderPageProps) {
  const pageUrl = "/calender";

  return (
    <>
      <BasicMeta url={pageUrl} title={title}/>
      <OpenGraphMeta url={pageUrl} title={title}/>
      <TwitterCardMeta url={pageUrl} title={title}/>
      <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
            {intro && <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">{intro}</p>}
          </div>
          <div className="mx-auto mt-12 flex justify-center">
            <iframe
              title="calender"
              src="https://calendar.google.com/calendar/embed?src=d20311e46b08d3e17eb772b10fd71671658c2a7922b76c932b7069741d874f77%40group.calendar.google.com&ctz=Europe%2FVienna"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </>

  )
}