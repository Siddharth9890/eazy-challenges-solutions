import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Sites({
  sites,
}: {
  sites: {
    name: string;
    isAvailable: boolean;
    link: string;
  }[];
}) {
  const [selectedSite, setSelectedSite] = useState(sites[3]);

  return (
    <div className="mt-14 lg:mt-0 lg:row-span-3">
      <div className="mt-10">
        <h3 className="text-sm  font-medium">Sites</h3>

        <RadioGroup
          value={selectedSite}
          onChange={setSelectedSite}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {sites.map((site) => (
              <RadioGroup.Option
                key={site.name}
                value={site}
                disabled={!site.isAvailable}
                className={({ active }) =>
                  classNames(
                    site.isAvailable
                      ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                      : "bg-gray-50 text-gray-200 cursor-not-allowed",
                    active ? "ring-4 ring-indigo-500" : "",
                    "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="span">{site.name}</RadioGroup.Label>
                    {site.isAvailable ? (
                      <span
                        className={classNames(
                          active ? "border" : "border-2",
                          checked ? "border-indigo-500" : "border-transparent",
                          "absolute -inset-px rounded-md pointer-events-none"
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1={0}
                            y1={100}
                            x2={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <a
        href={selectedSite.link}
        target={"_blank"}
        rel="noreferrer"
        type="submit"
        className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Visit {selectedSite.name}
      </a>
    </div>
  );
}
