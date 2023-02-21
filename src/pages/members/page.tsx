import { fetchAPI } from "@/src/api/api";
import Member from "@/components/Member";
import { IMember } from "@/src/members/model";

export default async function Page() {
  const {data} = await fetchAPI('/members', { populate: '*' });

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
                {data && data.map(({id, attributes}: IMember) => (
                  <li key={id}>
                    <Member attributes={attributes}/>
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
