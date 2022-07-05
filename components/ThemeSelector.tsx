import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function IconBase({ children, ...props }: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      {children}
    </svg>
  );
}

function LightIcon(props: any) {
  return (
    <IconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </IconBase>
  );
}

function DarkIcon(props: any) {
  return (
    <IconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </IconBase>
  );
}

function SystemIcon(props: any) {
  return (
    <IconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </IconBase>
  );
}

export function ThemeSelector(props: any) {
  const { theme, setTheme } = useTheme();

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="bg-white flex  rounded-full ">
          {theme === "light" ? (
            <LightIcon className="h-8 w-8" />
          ) : theme === "dark" ? (
            <DarkIcon className="h-8 w-8" />
          ) : (
            <SystemIcon className="h-8 w-8" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <div className="flex justify-center items-center">
                <LightIcon className="h-8 w-8" />
                <button
                  onClick={() => setTheme("light")}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Light Theme
                </button>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="flex justify-center items-center">
                <DarkIcon className="h-8 w-8" />
                <button
                  onClick={() => setTheme("dark")}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Dark Theme
                </button>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="flex justify-center items-center">
                <SystemIcon className="h-8 w-8" />
                <button
                  onClick={() => setTheme("system")}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  System
                </button>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
