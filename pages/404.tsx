import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "All Challenges",
    href: "/challenges",
  },
  {
    title: "Mongodb Aggregations challenge",
    href: "/challenge/mongodb-aggregations-build-charts-with-sample-data",
  },
];

export default function Example() {
  return (
    <>
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold  tracking-wide uppercase">
              Popular pages
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex items-start space-x-4"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base text-center font-medium">
                      <span>
                        <Link href={link.href} className="focus:outline-none">
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
