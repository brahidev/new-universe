import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Input, Button } from "@material-tailwind/react";

const NewsContent = () => {
  const editorRef = useRef(null);
		const log = () => {
			if (editorRef.current) {
			console.log('Editor', editorRef.current.getContent());
		}
	};

  return (
    <div className="md:ml-[15vw] md:w-[80%] md:mt-[5%] m-4">
      <Input
        label="Titulo Noticia"
      />
      <Editor
        apiKey="0dfn6pnfyonbrihyqddf7hozcfednhk2scl1pvj5in7gsba6"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Escribe tu noticia aqui !</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Button onClick={log} className="md:mt-4 mt-4">Crear</Button>
    </div>
  );
};

export default NewsContent;
