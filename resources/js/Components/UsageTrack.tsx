import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { TotalUsageContext } from "@/context/totalUageContext";

type Props = {};

const UsageTrack = (props: Props) => {
  const [templates, setTemplates] = React.useState([]);
  const { usage, setUsage } = React.useContext(TotalUsageContext);

  const user = usePage().props.auth.user;

  if (!user) return null;

  const getTemplates = async () => {
    // get templates from api
    const res = await axios.get("/getTemplates");

    setTemplates(res.data);
  };

  React.useEffect(() => {
    getTemplates();
  }, []);

  const getTotalUsage = () => {
    let total = 0;
    templates.forEach((template: any) => {
      total += template.aiResponse.length;
    });
    setUsage(total);
  };

  React.useEffect(() => {
    getTotalUsage();
  }, [templates]);

  return (
    <div className="w-full">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>

        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: (usage / 100000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="font-medium text-sm mt-2">
          {usage}/{user.credits} credits
        </h2>
      </div>

      <Link href="/billing">
        <PrimaryButton className="bg-primary w-full my-2 flex items-center justify-center">
          Upgrade
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default UsageTrack;
