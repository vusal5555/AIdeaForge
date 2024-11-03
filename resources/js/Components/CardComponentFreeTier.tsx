import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Link } from "@inertiajs/react";

const CardComponentFreeTier = () => {
  return (
    <Card className="shadow-2xl rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg text-black font-semibold text-center">
          Free
        </CardTitle>
        <CardDescription className="font-extrabold text-2xl text-black text-center">
          0$/ <span className="text-sm">for first 10000 credits</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>10.000 Words/Month</p>
        <p>50+ Content Templates</p>
        <p>Unlimited Download and Copy</p>
        <p>1 Month of History</p>
      </CardContent>
      <CardFooter>
        <Link
          href="/dashboard"
          className="w-full px-6 py-3 rounded-full bg-primary flex items-center justify-center text-white"
        >
          Free Plan
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardComponentFreeTier;
