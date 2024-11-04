import { Head, Link } from "@inertiajs/react";

const index = () => {
  return (
    <>
      <Head title="Success"></Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-primary mb-4">
            Payment Successful
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Thank you for your purchase! Your payment has been processed
            successfully.
          </p>
          <div className="flex justify-center">
            <Link
              href="/dashboard"
              className="bg-primary text-white py-2 px-4 rounded  transition duration-200"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
