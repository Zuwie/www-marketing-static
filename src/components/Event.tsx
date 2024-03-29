import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import { IEvent } from "@/src/pages/events/model";
import { isInThePast } from "@/src/lib/helpers";

export default function Event({data}: { data: IEvent }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all ${isInThePast(data.dateEnd || data.date) ? "opacity-70" : ""}`}>
      <div className="flex-shrink-0 relative h-56">
        <Image
          fill
          className="h-fit w-full object-cover"
          src={data.banner}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex gap-4 justify-between align-center py-2 mb-4 text-gray-700 border-b-2 border-b-gray-700">
          <div className="flex gap-1">
            <CalendarIcon width={24} className="self-start" />
            <p>
              {new Date(data.date).toLocaleDateString("de-DE", {
                weekday: "short",
                year: "numeric",
                month: "numeric",
                day: "numeric"
              })}

              {data.dateEnd && (
                <span> - {new Date(data.dateEnd).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric"
                })}</span>
              )}
            </p>
          </div>
          <div className="flex gap-1">
            <ClockIcon width={24} className="self-start" />
            <p>
              {new Date(data.date).toLocaleTimeString("de-DE", {hour: "2-digit", minute: "2-digit"})}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-900">{data.name}</p>
          <p>{data.address}</p>
          <ReactMarkdown
            className="markdown-container mt-3 text-base text-gray-700">{data.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
