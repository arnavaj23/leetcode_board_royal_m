import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        {/* <div className="mx-auto max-w-md">
          <img src="/img/logo.svg" className="h-6" alt="Tailwind Play" />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>
                An advanced online playground for Tailwind CSS, including
                support for things like:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Customizing your
                    <code className="text-sm font-bold text-gray-900">
                      tailwind.config.js
                    </code>{" "}
                    file
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Extracting classes with
                    <code className="text-sm font-bold text-gray-900">
                      @apply
                    </code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex">
          <Button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Hello
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
