import PrimaryButton from "./PrimaryButton";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

type Props = {
  aiOutput: string;
};

const OutPut = ({ aiOutput }: Props) => {
  const editorRef: any = useRef();

  console.log(aiOutput);

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

      <div>
        <Editor
          initialValue={aiOutput}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default OutPut;
