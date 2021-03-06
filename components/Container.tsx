export function Container() {
  return (
    <>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Solutions for </span>
            <span className="block text-indigo-600 xl:inline">
              Eazy Develop
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base  sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            This website contains all the solutions for the challenges taken by
            Shrey Batra. You can follow him on linkedin to know more!.
          </p>
          <p className="mt-3 max-w-md mx-auto text-base  sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            You can find the solution to the latest challenge down below or in
            challenges page.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#charts"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
