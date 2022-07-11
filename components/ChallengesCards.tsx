import Link from "next/link";

const challenges = [
  {
    name: "Redis Pub Sub Pattern",
    title: "Redis",
    href: "/challenge/redis-pub-sub-pattern-build-a-cli",
  },
  {
    name: "MongoDb Aggregations",
    title: "MongoDb",
    href: "/challenge/mongodb-aggregations-build-charts-with-sample-data",
  },
];

export function ChallengeCards() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 m-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {challenges.map((challenge, index) => (
        <li
          key={index}
          className="col-span-1 flex flex-col text-center border-2 border-black dark:border-white rounded-lg shadow divide-y divide-black dark:divide-white"
        >
          <Link href={challenge.href} className="flex-1  flex flex-col p-8">
            <div>
              <h3 className="mt-6  text-sm font-medium">{challenge.name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className=" text-sm">{challenge.title}</dd>
                <dd className=" text-sm">#{index + 1}</dd>
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
