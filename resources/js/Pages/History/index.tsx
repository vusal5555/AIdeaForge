import PrimaryButton from "@/Components/PrimaryButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import templateArray from "../../templates";

type Props = {
  templates: any;
};

const HistoryPage = ({ templates }: Props) => {
  console.log(templateArray);
  const [copiedStates, setCopiedStates] = React.useState<boolean[]>(
    Array(templates.length).fill(false)
  );

  const truncateResponse = (response: string, limit: number) => {
    return response.length > limit
      ? response.substring(0, limit) + "..."
      : response;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    // Update the specific copied state to true
    setCopiedStates((prev) => {
      const newCopiedStates = [...prev];
      newCopiedStates[index] = true; // Set the copied state for this specific index
      return newCopiedStates;
    });

    // Reset the copied state after a delay (optional)
    setTimeout(() => {
      setCopiedStates((prev) => {
        const newCopiedStates = [...prev];
        newCopiedStates[index] = false; // Reset the copied state for this specific index
        return newCopiedStates;
      });
    }, 2000); // Change this duration as needed
  };

  const getTemplateDetails = (slug: string) => {
    return templateArray.find((template: any) => template.slug === slug);
  };
  return (
    <>
      <Head title="History"></Head>
      <MainLayout>
        <div>
          <h1 className="font-bold text-4xl mb-1">History</h1>
          <p className="text-gray-400 mb-10">
            Search your previously generated AI content
          </p>
          <div className="grid items-center grid-cols-2  md:grid-cols-5 lg:grid-cols-5 gap-4 mb-14">
            <h2 className="font-bold uppercase">Template</h2>
            <h2 className="font-bold uppercase">AI Response</h2>
            <h2 className="font-bold uppercase">Date</h2>
            <h2 className="font-bold uppercase">Words</h2>
            <h2 className="font-bold uppercase">Copy</h2>
          </div>

          <div>
            {templates?.map((template: any, index: number) => {
              const templateDetails = getTemplateDetails(
                template.template_slug
              );
              return (
                <div
                  key={template.id}
                  className="grid items-center grid-cols-2  md:grid-cols-5 lg:grid-cols-5 gap-4 mb-14"
                >
                  <h2 className="flex items-center font-semibold">
                    {templateDetails && (
                      <>
                        <img
                          src={templateDetails.icon}
                          alt={templateDetails.name}
                          className="w-6 h-6 mr-2"
                        />
                        {templateDetails.name}
                      </>
                    )}
                  </h2>

                  {/* <h2>{template.template.name}</h2> */}
                  <h2 className="font-semibold">
                    {truncateResponse(template.aiResponse, 60)}
                  </h2>
                  <h2 className="font-semibold">
                    {formatDate(template.created_at)}
                  </h2>
                  <h2 className="font-semibold">
                    {template.aiResponse.length}
                  </h2>
                  <h2>
                    <PrimaryButton
                      onClick={() =>
                        copyToClipboard(template.aiResponse, index)
                      }
                      className="bg-primary"
                    >
                      {copiedStates[index] ? "Copied!" : "Copy"}
                    </PrimaryButton>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default HistoryPage;
