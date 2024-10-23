import templates from "@/templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

type Props = {
  searchInput: string;
};

const TemplateList = ({ searchInput }: Props) => {
  const [templarteList, setTemplateList] = useState<any[]>(templates);

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  const filteredTemplates = templates.filter((template) => {
    return template.name.toLowerCase().includes(searchInput.toLowerCase());
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
      {filteredTemplates.map((template) => (
        <TemplateCard
          key={template.slug}
          name={template.name}
          desc={template.desc}
          category={template.category}
          icon={template.icon}
          aiPrompt={template.aiPrompt}
          slug={template.slug}
          form={template.form.map((field) => ({
            ...field,
            field: field.field as "input" | "textarea",
          }))}
        />
      ))}
    </div>
  );
};

export default TemplateList;
