import type { TemplatePreviewProps } from "@staticcms/core";
import CMS from "@staticcms/core";
import type { FC } from "react";
import { useEffect } from "react";

import { CalendarDaysIcon, Cog6ToothIcon, CubeIcon, EnvelopeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import config from "./config";

CMS.registerIcon('settings', () => <Cog6ToothIcon width={18}/>)
CMS.registerIcon('cube', () => <CubeIcon width={18}/>)
CMS.registerIcon('users', () => <UserGroupIcon width={18}/>)
CMS.registerIcon('calender', () => <CalendarDaysIcon width={18}/>)
CMS.registerIcon('envelope', () => <EnvelopeIcon width={18}/>)

interface PostData {
  title: string;
  date: string;
  body: string;
}

// eslint-disable-next-line react/function-component-definition
const PostPreview: FC<TemplatePreviewProps<PostData>> = ({entry, widgetFor}) => (
  <div className="content">
    <h1>{entry.data.title}</h1>
    <time>{entry.data.date}</time>
    <div>{widgetFor("body")}</div>
  </div>
);

function CMSPage() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      config.local_backend = true;
    }

    CMS.registerPreviewTemplate("posts", PostPreview);

    // CMS.registerAdditionalLink({
    //   id: "external-link",
    //   title: "External link",
    //   data: "https://example.com/",
    // });

    CMS.init({ config });
  }, []);

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }

        #__next {
          display: none;
        }
      `}</style>
    </div>
  );
}

CMSPage.displayName = "CMSPage";

export default CMSPage;
