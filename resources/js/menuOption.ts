import {
  LayoutDashboard,
  CircleUser,
  FileClock,
  WalletCards,
} from "lucide-react";

const menuOption = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutDashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "History",
    icon: FileClock,
    link: "/history",
  },
  {
    id: 3,
    name: "Billing",
    icon: WalletCards,
    link: "/billing",
  },
  {
    id: 4,
    name: "Account",
    icon: CircleUser,
    link: "/profile",
  },
];
export default menuOption;
