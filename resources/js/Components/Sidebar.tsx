import menuOption from "@/menuOption";
import { Link } from "@inertiajs/react";
import UsageTrack from "./UsageTrack";

const Sidebar = () => {
  const path = route().current();

  return (
    <div className="w-64 h-screen  p-5 bg-white flex flex-col justify-between">
      <div className="grid gap-2">
        <Link href="/dashboard" className="flex gap-3">
          <img src="/logo.svg" className="w-10 h-10" alt="logo" />
          <h2 className="font-extrabold text-3xl text-primary mb-10">
            AIdeaForge
          </h2>
        </Link>
        {menuOption.map((item, index) => (
          <Link href={item.link} key={index}>
            <div
              className={`flex items-center gap-3 p-4 hover:bg-primary hover:text-white rounded-md ${
                path === item.link ? "bg-primary text-white" : ""
              }`}
            >
              <item.icon></item.icon>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <UsageTrack></UsageTrack>
      </div>
    </div>
  );
};
export default Sidebar;
