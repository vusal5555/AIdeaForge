import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />

      <div className="lg:min-h-screen overflow-y-auto bg-slate-100">
        <div className="max-w-7xl mx-auto flex  justify-between p-4">
          <Link href="/dashboard" className="flex gap-3">
            <img
              src="/logo.svg"
              className="w-7 h-7 lg:w-10 lg:h-10"
              alt="logo"
            />
            <h2 className="font-extrabold text-xl lg:text-3xl text-primary mb-10">
              AIdeaForge
            </h2>
          </Link>

          <Link href="/dashboard">
            <PrimaryButton
              className=" 
              inline-flex justify-center items-center  gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-2 px-2 lg:py-3 lg:px-4 dark:focus:ring-offset-gray-800
              "
            >
              Dashboard
            </PrimaryButton>
          </Link>
        </div>
        <div className="max-w-[85rem] mx-auto flex flex-col items-center justify-center mt-16 lg:mt-20 px-8">
          <h1 className="text-5xl lg:text-6xl text-gray-800 mb-5 font-bold text-center">
            AI Content{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Generator
            </span>
          </h1>

          <p className="text-md lg:text-lg text-gray-600 dark:text-neutral-400 text-center w-full max-w-[700px] mb-5">
            Effortlessly Create content, optimize SEO, and enhance your writing
            and code—all powered by AI.
          </p>
          <Link href="/dashboard">
            <PrimaryButton className="inline-flex justify-center items-center  gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800">
              Get started
            </PrimaryButton>
          </Link>
        </div>

        <div className="border border-slate-200 shadow-lg">
          <img
            src="/app.png"
            className="w-full max-w-[800px] mx-auto h-full mt-5 p-2"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
