import ReactMarkdown from "react-markdown";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import OptionalSlider from "@/src/components/OptionalSlider";
import {COMPANY} from "@/src/constants";
import DiscordIcon from "@/src/components/DiscordIcon";

export default function LandingThird({images, subTitle, title, intro, list}) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">{subTitle}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
              <div className="mt-6 text-lg leading-8 text-gray-600">
                <ReactMarkdown>{intro}</ReactMarkdown>
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {list.map((listItem) => (
                  <div key={listItem.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <ArrowLongRightIcon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true"/>
                    </dt>
                    {' '}
                    <dd className="inline">{listItem.body}</dd>
                  </div>
                ))}
                <Link
                    href={COMPANY.DISCORD}
                    target="_blank"
                    className="mt-8 inline-block rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Trete uns auf Discord bei <DiscordIcon className="inline-block ml-2" />
                </Link>
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end rounded-xl shadow-xl ring-1 ring-gray-400/10">
            <OptionalSlider images={images}/>
          </div>
        </div>
      </div>
    </div>
  )
}
