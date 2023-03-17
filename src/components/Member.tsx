import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { IMember } from "@/src/pages/members/model";

export default function Member({data}: {data: IMember}) {
  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-3 relative">
        <Image fill className="rounded-lg object-cover shadow-lg"
             src={data.profilePicture} alt=""/>
      </div>
      <div className="space-y-1 text-lg font-medium leading-6">
        <h3>{data.name}</h3>
        <p className="text-indigo-600">{data.role}</p>
      </div>
      <div className="text-lg text-gray-500">
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </div>
    </div>
  );
}
