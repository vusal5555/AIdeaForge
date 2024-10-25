import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head title="Billing"></Head>
      <MainLayout>Billing</MainLayout>
    </>
  );
};

export default index;
