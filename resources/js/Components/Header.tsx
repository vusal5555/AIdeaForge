import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import MobileSidebar from "./MobileSidebar";
import { Search } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  const { auth } = usePage().props;
  const user = auth.user as { credits?: number };

  const credits =
    user.credits !== undefined ? (user.credits <= 0 ? 0 : user.credits) : 0;

  return (
    <div className="flex justify-between items-center gap-3 p-4 shadow-sm border-2 w-full bg-white">
      <div className="flex items-center gap-2 p-2 rounded-lg border-2 w-full max-w-lg">
        <Search></Search>
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none border-none focus:border-none focus:ring-0"
        />
      </div>

      <div className="hidden lg:block">
        <h1 className="bg-primary rounded-full p-1 text-white text-xs px-2">
          Join Membership for just $9.99/month
        </h1>
      </div>

      <div className="flex items-center  lg:hidden gap-2">
        <div className="block lg:hidden mt-1">
          <MobileSidebar></MobileSidebar>
        </div>
      </div>
    </div>
  );
};
export default Header;
