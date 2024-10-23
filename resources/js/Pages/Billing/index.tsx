import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

type Props = {};

const index = (props: Props) => {
  const handleCheckout = async () => {
    const res = await axios.post("/complete");
    console.log(res.data);
  };

  handleCheckout();
  return (
    <>
      <Head title="Billing"></Head>
      <MainLayout>Billing</MainLayout>
    </>
  );
};

export default index;
