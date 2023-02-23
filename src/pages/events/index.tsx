import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { IEvent } from "@/src/pages/events/model";
import Event from "@/src/components/Event";

export async function getStaticProps() {
  const membersFile = path.join(process.cwd(), "content/events.yml");
  const fileContents = fs.readFileSync(membersFile, 'utf8');
  const data = yaml.load(fileContents)

  return {
    props: JSON.parse(JSON.stringify(data))
  }
}

interface EventsPageProps {
  title: string;
  intro: string;
  events: IEvent[];
}

export default function Index({title, intro, events}: EventsPageProps) {
  console.log(events)
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">{intro}</p>
        </div>
        {events && (
          <ul role="list" className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {events.map((event: IEvent) => (
              <li key={event.name}>
                <Event data={event} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
