import FormSection from "@/Components/FormSection";
import OutPut from "@/Components/OutPut";
import { Template } from "@/Components/TemplateCard";
import { TotalUsageContext } from "@/context/totalUageContext";
import MainLayout from "@/Layouts/MainLayout";
import templates from "@/templates";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React from "react";

type Props = {
  template_slug: string;
};

const index = ({ template_slug }: Props) => {
  const [formData, setFormData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState("");

  const { usage, setUsage } = React.useContext(TotalUsageContext);

  if (usage > 100000) {
    alert(
      "You have used 100000 tokens. Please upgrade your account to continue using the service."
    );
  }

  const formatTemplateSlug = (template_slug: string) => {
    const formattedTemplate1 = template_slug.replaceAll("-", " ");

    const formattedTemplate2 =
      formattedTemplate1[0].toUpperCase() + formattedTemplate1.slice(1);

    return formattedTemplate2;
  };

  const template = templates.find(
    (template) => template.slug === template_slug
  ) as Template | undefined;

  const selectedPrompt = template?.aiPrompt;

  const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

  const generateAIContent = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/generateAIContent", {
        prompt: finalPrompt, // Ensure you're sending 'prompt' as the key
      });

      setOutput(res.data.content);

      setLoading(false);
    } catch (error) {
      console.error("Error generating AI content", error);
    }
  };

  if (!template) {
    return null; // or handle the case when template is not found
  }

  const saveTemplate = async () => {
    await axios.post("/saveTemplate", {
      aiResponse: output,
      formData: formData,
      template_slug: template.slug,
    });
  };

  React.useEffect(() => {
    if (output) {
      saveTemplate();
    }
  }, [output]);

  return (
    <>
      <Head title={formatTemplateSlug(template_slug)}></Head>
      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormSection
            useFormData={(value) => setFormData(value)}
            template={template}
            onSubmit={generateAIContent}
            loading={loading}
          />
          {/* OutputSection */}

          <div className="col-span-2">
            <OutPut aiOutput={output}></OutPut>
          </div>
        </div>
        {/* FormSection */}
      </MainLayout>
    </>
  );
};
export default index;
