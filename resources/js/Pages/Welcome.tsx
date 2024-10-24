import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />
      <div className="flex flex-col items-center justify-center text-7xl h-screen font-extrabold uppercase ">
        <h1>Landing Page!</h1>
        <Link href="/dashboard">
          <PrimaryButton className="bg-primary">Get started</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
