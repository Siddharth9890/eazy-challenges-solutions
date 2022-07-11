import { BreadCrumbs } from "../../components/Challenge/BreadCrumbs";
import { Description } from "../../components/Challenge/Description";
import { Sites } from "../../components/Challenge/Sites";
import { Charts } from "../../components/Charts";

const topics = ["mongodb", "aggregations"];

const pageName = "Build charts using mongodb aggregations";

const mainDescription =
  "To analyze the sample data and build awesome charts using mongoDb aggregations functions to explore the data. Used various pipelines to transform the data and then plot graphs based on the transformed data.";

const mainHighlights = [
  "MongoDb Aggregations.",
  "Various pipelines stages.",
  "$objectToArray very important pipeline.",
];

const sites = [
  { name: "Github", isAvailable: false, link: "" },
  {
    name: "Website",
    isAvailable: true,
    link: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/public/dashboards/62ba6f7d-2b11-44af-8901-6d176cdda4fb",
  },
  {
    name: "Blog",
    isAvailable: true,
    link: "https://theuniquecoder.hashnode.dev/introduction-to-mongodb-aggregations-and-eazy-develop-challenge-2",
  },
  {
    name: "Linkedin",
    isAvailable: true,
    link: "https://www.linkedin.com/posts/siddharth9890_solutions-for-eazy-hacks-activity-6949978958469681152-VqCf?utm_source=linkedin_share&utm_medium=member_desktop_web",
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
        <Charts showButtons={false} />
      </div>
    </>
  );
}
