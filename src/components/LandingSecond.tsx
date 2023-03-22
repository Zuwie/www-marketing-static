import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import OptionalSlider from "@/src/components/OptionalSlider";

export default function LandingSecond({images, subTitle, title, intro, list}) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
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
                    </dt>{' '}
                    <dd className="inline">{listItem.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first rounded-xl shadow-xl ring-1 ring-gray-400/10">
            <OptionalSlider images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}