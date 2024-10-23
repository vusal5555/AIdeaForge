import { Link } from "@inertiajs/react";
import React from "react";

type Props = {};

export interface Template {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form?: FormField[];
}

export interface FormField {
  label: string;
  field: "input" | "textarea";
  name: string;
  required?: boolean;
}

const TemplateCard = (template: Template) => {
  return (
    <Link href={route("template.index", template.slug)}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <img src={template.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{template.name}</h2>
        <p className="text-gray-500 line-clamp-3">{template.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
