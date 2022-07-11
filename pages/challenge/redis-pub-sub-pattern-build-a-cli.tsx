import { BreadCrumbs } from "../../components/Challenge/BreadCrumbs";
import { Description } from "../../components/Challenge/Description";
import { ImageGallery } from "../../components/Challenge/ImageGallery";
import { Sites } from "../../components/Challenge/Sites";

const topics = ["redis", "pub-sub"];

const pageName = "Build a cli using redis pub-sub pattern";

const mainDescription =
  "Code engine a simple cli tool which implements redis pubSub pattern it is developed using node.js and various packages available on npmjs. It takes your javascript code and executes it using exec system call provided by node.js and gives result of the execution as well.";

const mainHighlights = [
  "To implement Redis pub/Sub pattern.",
  "Build A Cli using node.js",
  "Code editor",
];

const sites = [
  {
    name: "Github",
    isAvailable: true,
    link: "https://github.com/Siddharth9890/code-engine",
  },
  { name: "Website", isAvailable: false, link: "" },
  {
    name: "Blog",
    isAvailable: true,
    link: "https://theuniquecoder.hashnode.dev/what-i-learned-from-1st-eazy-hack-challenge",
  },
  {
    name: "Linkedin",
    isAvailable: true,
    link: "https://www.linkedin.com/posts/siddharth9890_github-siddharth9890code-engine-code-activity-6947125919165620224-15Ly?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
];

const images = [
  {
    src: "https://user-images.githubusercontent.com/63333707/175875826-754d036f-dc57-402d-907c-29bc64745185.png",
    alt: "Welcome Screen with all options .",
  },
  {
    src: "https://user-images.githubusercontent.com/63333707/175875846-54c89b7d-7b6d-4053-91cc-40ba599c43fa.png",
    alt: "Submitted code with sample tracking id .",
  },
  {
    src: "https://user-images.githubusercontent.com/63333707/175875870-2047294f-2c17-4531-a059-9a23f729276c.png",
    alt: "Check the status of submitted code .",
  },
  {
    src: "https://user-images.githubusercontent.com/63333707/175875885-714218b4-21a1-4ec2-a598-19d28954a4fc.png",
    alt: "History of all submitted codes ",
  },
];

export default function Component() {
  return (
    <>
      <div className="pt-6">
        <BreadCrumbs pageName={pageName} topics={topics} />
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-white  lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight  sm:text-3xl">
              {pageName}
            </h1>
          </div>
          <Description
            mainDescription={mainDescription}
            mainHighlights={mainHighlights}
          />
          <Sites sites={sites} />
          <div className="mt-10">
            <h3 className="text-base font-medium">
              For more information please check the attached links.
            </h3>
          </div>
        </div>
        <ImageGallery images={images} />
      </div>
    </>
  );
}
