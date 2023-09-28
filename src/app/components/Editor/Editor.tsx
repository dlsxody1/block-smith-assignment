import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useMemo, SetStateAction, Dispatch } from "react";

export default function QuillEditor({
  defaultContent,
  html,
  setHtml,
}: {
  defaultContent: string;
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
}) {
  const quillRef = useRef(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
        ],
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const style = {
    width: "796px",
    height: "429px",
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "image",
  ];

  return (
    <ReactQuill
      ref={quillRef}
      //onChange={setHtml}
      style={style}
      modules={modules}
      formats={formats}
      value={defaultContent}
      placeholder={"내용을 입력하세요"}
      theme="snow"
    />
  );
}
