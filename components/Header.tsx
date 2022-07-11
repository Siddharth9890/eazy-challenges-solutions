import { Fragment } from "react";
import Image from "next/image";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ThemeSelector } from "./ThemeSelector";
import logo from "../public/ProfilePicturePhoto.jpg";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "All challenges", href: "/challenges" },
  { name: "About", href: "/about" },
];

export function Header() {
  return (
    <div className="relative  overflow-hidden">
      <div className="relative pt-6 pb-4 sm:pb-10">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <Image src={logo} alt={"Logo"} height={50} width={50} />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 dark:bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <ThemeSelector />
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image src={logo} alt={"Logo"} height={50} width={50} />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <ThemeSelector />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
