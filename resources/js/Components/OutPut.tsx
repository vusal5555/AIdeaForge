import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import PrimaryButton from "./PrimaryButton";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  aiOutput: string;
};

const OutPut = ({ aiOutput }: Props) => {
  const editorRef: any = useRef();

  useEffect(() => {
    editorRef.current.getInstance().setMarkdown(aiOutput);
  }, [aiOutput]);
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Your result</h2>
        <PrimaryButton
          onClick={() => navigator.clipboard.writeText(aiOutput)}
          className="flex items-center gap-2 bg-primary"
        >
          <Copy className="w-4 h-4"></Copy> Copy
        </PrimaryButton>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        value={aiOutput}
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={(e: any) => {
          console.log(editorRef.current.getInstance().getMarkdown());
        }}
      />
    </div>
  );
};

export default OutPut;
