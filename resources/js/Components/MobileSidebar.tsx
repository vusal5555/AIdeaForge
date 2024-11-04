import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import menuOption from "@/menuOption";
import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";

const MobileSidebar = () => {
  const path = route().current();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-black" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="w-full h-full">
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
