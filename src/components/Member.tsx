import ReactMarkdown from "react-markdown";
import { IMember } from "@/src/members/model";
import Image from "next/image";

export default function Member({ attributes }: Pick<IMember, "attributes">) {
  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-2 relative">
        <Image fill className="rounded-lg object-cover shadow-lg"
             src={process.env.NEXT_PUBLIC_STRAPI_URL + attributes.profilePicture.data.attributes.url} alt=""/>
      </div>
      <div className="space-y-1 text-lg font-medium leading-6">
        <h3>{attributes.name}</h3>
        <p className="text-indigo-600">{attributes.role}</p>
      </div>
      <div className="text-lg text-gray-500">
        <ReactMarkdown>{attributes.bio}</ReactMarkdown>
      </div>
    </div>
  );
}
