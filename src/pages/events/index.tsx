export default function Index() {
  // const {data} = await fetchAPI('/events', {populate: '*'});

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Events</h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        {/*{data && (*/}
        {/*  <ul role="list" className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">*/}
        {/*    { data.map(({id, attributes}: IEvent) => (*/}
        {/*      <li key={id}>*/}
        {/*        <Event attributes={attributes} />*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*)}*/}
      </div>
    </div>
  )
}
