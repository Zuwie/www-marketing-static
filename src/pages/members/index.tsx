// import path from "path";
// import fs from "fs";
import { IMember } from "@/src/pages/members/model";
import Member from "@/src/components/Member";

export async function getStaticProps() {
  // const membersDirectory = path.join(process.cwd(), "content/members");
  // const fileNames = fs.readdirSync(membersDirectory);

  // const fileData = fileNames
  //   .filter((it) => it.endsWith(".json"))
  //   .map((fileName) => {
  //     const fullPath = path.join(membersDirectory, fileName);
  //     const fileContents = fs.readFileSync(fullPath, "utf8");
  //
  //     return JSON.parse(fileContents)
  //   });

  return {
    props: {
      data: [],
    }
  }
}

export default function Index({data}) {
  return(
    <>
      <div className="pt-16">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere Mitglieder</h2>
              <p className="text-xl text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {data.length > 0 && data.map((data: IMember) => (
                  <li key={data.name}>
                    <Member data={data}/>
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
