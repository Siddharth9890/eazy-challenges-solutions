import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const people = [
  {
    name: "Shrey Batra",
    role: "Runs all the challenges on linkedin.",
    imageUrl:
      "https://media-exp2.licdn.com/dms/image/C4D03AQELMAJJxkcYFg/profile-displayphoto-shrink_200_200/0/1652090595785?e=2147483647&v=beta&t=PCEtDqSZOOCMO_lphtZFyf_0tWoi3qvpOzZxXucf_GY",
    linkedinUrl: "https://in.linkedin.com/in/shreybatra",
  },
  {
    name: "Siddharth Singh",
    role: "Loves to solve challenges.",
    imageUrl: "https://avatars.githubusercontent.com/u/63333707?v=4",
    linkedinUrl: "https://in.linkedin.com/in/siddharth9890",
  },
];

export default function AboutUs() {
  return (
    <>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <p className="text-2xl font-extrabold tracking-tight">
              If you want to contribute feel free to do so 😊
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <Image
                    className="object-cover shadow-lg rounded-lg"
                    height={500}
                    width={500}
                    src={person.imageUrl}
                    alt="Person image"
                  />

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a
                          href={person.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <ExternalLinkIcon className="h-6 w-6 text-indigo-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
