import github from "../public/icons/github";
import linkedin from "../public/icons/linkedin";

const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/Siddharth9890",
    icon: github,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/siddharth-singh-563824202/",
    icon: linkedin,
  },
];

export function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={"_blank"}
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <div className="h-10 w-10">
                <item.icon aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base dark:text-white text--900">
            Designed and Build by Siddharth Singh.
          </p>
        </div>
      </div>
    </footer>
  );
}
