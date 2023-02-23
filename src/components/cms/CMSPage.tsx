import CMS from "@staticcms/core";
import { useEffect } from "react";

import config from "./config";

import type { TemplatePreviewProps } from "@staticcms/core";
import type { FC } from "react";
import { CalendarDaysIcon, Cog6ToothIcon, CubeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

CMS.registerIcon('settings', () => <Cog6ToothIcon />)
CMS.registerIcon('cube', () => <CubeIcon />)
CMS.registerIcon('users', () => <UserGroupIcon />)
CMS.registerIcon('calender', () => <CalendarDaysIcon />)

interface PostData {
  title: string;
  date: string;
  body: string;
}

const PostPreview: FC<TemplatePreviewProps<PostData>> = ({ entry, widgetFor }) => {
  return (
    <div className="content">
      <h1>{entry.data.title}</h1>
      <time>{entry.data.date}</time>
      <div>{widgetFor("body")}</div>
    </div>
  );
};

const CMSPage = () => {
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
};

CMSPage.displayName = "CMSPage";

export default CMSPage;
