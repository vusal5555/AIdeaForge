import CardComponentFreeTier from "@/Components/CardComponentFreeTier";
import CardComponentPaidTier from "@/Components/CardComponentPaidTier";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

const index = () => {
  return (
    <>
      <Head title="Billing"></Head>
      <MainLayout>
        <div>
          <div className="max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2  items-center justify-center pt-32 gap-5">
            <CardComponentFreeTier></CardComponentFreeTier>
            <CardComponentPaidTier></CardComponentPaidTier>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default index;
