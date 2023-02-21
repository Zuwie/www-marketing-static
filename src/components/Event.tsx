import { isInThePast } from "@/src/lib/helpers";
// import Image from "next/image";
// import PlaceHolderImage from "@/public/club_logo.png";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
// import ReactMarkdown from "react-markdown";
import { IEvent } from "@/src/pages/events/model";

export default function Event({ attributes }: Pick<IEvent, "attributes">) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg shadow-lg${isInThePast(attributes.date) ? " opacity-70" : ""}`}>
      <div className="flex-shrink-0 relative h-48">
        {/*<Image*/}
        {/*  fill*/}
        {/*  className="h-48 w-full object-cover"*/}
        {/*  src={attributes.banner.data*/}
        {/*    ? (process.env.NEXT_PUBLIC_STRAPI_URL + attributes.banner.data?.attributes.formats.thumbnail.url)*/}
        {/*    : PlaceHolderImage}*/}
        {/*  alt=""*/}
        {/*/>*/}
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex gap-4 justify-between align-center py-2 mb-4 text-gray-700 border-b-2 border-b-gray-700">
          <div className="flex gap-1 align-center">
            <CalendarIcon width={24}/>
            <p>
              {new Date(attributes.date).toLocaleDateString("de-DE", {
                weekday: "long",
                year: "numeric",
                month: "numeric",
                day: "numeric"
              })}
            </p>
          </div>
          <div className="flex gap-1 align-center">
            <ClockIcon width={24}/>
            <p>
              {new Date(attributes.date).toLocaleTimeString("de-DE", {hour: "2-digit", minute: "2-digit"})}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-900">{attributes.title}</p>
          {/*<ReactMarkdown*/}
          {/*  className="markdown-container mt-3 text-base text-gray-500">{attributes.description}</ReactMarkdown>*/}
        </div>
      </div>
    </div>
  );
}
