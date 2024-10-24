import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center bg-slate-100 pt-6 mt-48 sm:pt-0 px-2">
      <div>
        <Link href="/dashboard" className="flex gap-3">
          <img src="/logo.svg" className="w-10 h-10" alt="logo" />
          <h2 className="font-extrabold text-3xl text-primary mb-5">
            AIdeaForge
          </h2>
        </Link>
      </div>

      <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
