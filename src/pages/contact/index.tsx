import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { WEB3FORMS_KEY } from "@/src/constants";
import ReactMarkdown from "react-markdown";
import BasicMeta from "@/src/components/meta/BasicMeta";
import OpenGraphMeta from "@/src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/src/components/meta/TwitterCardMeta";

export async function getStaticProps() {
  const membersFile = path.join(process.cwd(), "content/contact.yml");
  const fileContents = fs.readFileSync(membersFile, 'utf8');
  const data = yaml.load(fileContents)

  return {
    props: data
  }
}

interface ContactPageProps {
  title: string;
  intro: string;
}

export default function Index({title, intro}: ContactPageProps) {
  const pageUrl = "/contact";
  const pageTitle = "Kontakt";

  return (
    <>
      <BasicMeta url={pageUrl} title={pageTitle}/>
      <OpenGraphMeta url={pageUrl} title={pageTitle}/>
      <TwitterCardMeta url={pageUrl} title={pageTitle}/>
      <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-xl">
          <svg
            className="absolute left-full translate-x-1/2 transform"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
          </svg>
          <svg
            className="absolute right-full bottom-0 -translate-x-1/2 transform"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <div className="mt-4 text-lg leading-6 text-gray-500">
              <ReactMarkdown>{intro}</ReactMarkdown>
            </div>
          </div>
          <div className="mt-12">
            <form action="https://api.web3forms.com/submit" method="POST"
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY}/>
              <input type="hidden" name="subject" value="New Submission from Web3Forms"/>
              <input type="hidden" name="from_name" value="Your Website Name"/>
              <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
              <input type="checkbox" name="botcheck" className="hidden"/>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue={''}
                />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                  Armee-Liste
                </label>
                <div className="mt-1">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    className="block w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer"
                  />
                  <p className="mt-1 text-sm text-gray-600" id="file_input_help">Nur PDF erlaubt</p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
