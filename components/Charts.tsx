const charts = [
  {
    id: 1,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62bfab43-d694-42d9-863d-a13c4acc43c6&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 2,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c0375c-f6cc-4948-8433-6bde72ed919b&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 3,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c1227f-6bc4-45bf-826f-15b9093713f1&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 4,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c12309-94d4-4498-836f-b65b2b5882ee&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 5,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c05f5a-7e6a-4244-8265-26c53d6332e0&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 6,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c11d89-ebb5-4f8c-8b6a-32e9b5d2dbbf&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 7,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c03971-d694-409b-8bdc-a13c4a001ce9&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 8,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c126a7-f6cc-4b9a-8ec9-6bde72819caf&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 9,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c12046-94d4-4852-89fa-b65b2b565859&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 10,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c11eb4-eb87-47cc-83fc-649c32dff020&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 11,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c2636d-7e6a-4c6f-88aa-26c53d38e593&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 12,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c2570c-ebb5-4a59-8d85-32e9b5243fe2&maxDataAge=3600&theme=light&autoRefresh=true",
  },
  {
    id: 13,
    src: "https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/embed/charts?id=62c03b45-6bc4-4aba-8934-15b909ab30da&maxDataAge=3600&theme=light&autoRefresh=true",
  },
];

export default function Charts() {
  return (
    <div className="bg-white dark:bg-black" id="charts">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <p className="text-xl text-black dark:text-white">Charts</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {charts.map((chart) => (
            <div key={chart.id} className="group relative">
              <div className="w-full h-96 rounded-lg overflow-hidden mt-8  sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                <iframe width="640" height="480" src={chart.src}></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md mr-8 mb-8 shadow">
            <a
              href="https://charts.mongodb.com/charts-aggregations-challenge-ea-anwef/public/dashboards/62ba6f7d-2b11-44af-8901-6d176cdda4fb"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              target={"_blank"}
              rel="noreferrer"
            >
              View on MongoDb
            </a>
          </div>
          <div className="rounded-md shadow">
            <a
              href="https://theuniquecoder.hashnode.dev/introduction-to-mongodb-aggregations-and-eazy-develop-challenge-2"
              target={"_blank"}
              rel="noreferrer"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              View Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
