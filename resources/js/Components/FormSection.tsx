import React, { useEffect } from "react";
import { FormField, Template } from "./TemplateCard";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import PrimaryButton from "./PrimaryButton";
import { Loader2Icon } from "lucide-react";

type Props = {
  template: Template;
  useFormData: (formData: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

const FormSection = ({ template, useFormData, onSubmit, loading }: Props) => {
  const [formData, setFormData] = React.useState({});

  useEffect(() => {
    useFormData(formData);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(e);
  };
  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <img
        src={template.icon}
        alt="icon"
        width={70}
        height={70}
        className="mb-2"
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">{template.name}</h2>
      <p className="text-gray-500 text-sm mb-4">{template.desc}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {template.form?.map((field: FormField, index) => {
          return (
            <div className="mb-2" key={index}>
              <label htmlFor={field.name} className="block mb-1 font-bold">
                {field.label}
              </label>
              {field.field === "input" ? (
                <TextInput
                  type="text"
                  name={field.name}
                  id={field.name}
                  className="border rounded-md px-2 py-1 w-full"
                  onChange={(e) => {
                    setFormData({ ...formData, [field.name]: e.target.value });
                  }}
                  required={field.required}
                />
              ) : (
                <TextArea
                  name={field.name}
                  id={field.name}
                  className="border rounded-md px-2 py-1 w-full"
                  onChange={(e) => {
                    setFormData({ ...formData, [field.name]: e.target.value });
                  }}
                  required={field.required}
                />
              )}
            </div>
          );
        })}

        <PrimaryButton
          disabled={loading}
          type="submit"
          className="bg-primary w-full flex items-center justify-center"
        >
          {loading && <Loader2Icon className="animate-spin"></Loader2Icon>}
          Generate Content
        </PrimaryButton>
      </form>
    </div>
  );
};

export default FormSection;
