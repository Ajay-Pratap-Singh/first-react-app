import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

const Editor =(props) => {
	const editor = useRef(null)
    const [content, setContent] = useState('')
    
	const config = {
        showWordsCounter: false,
        showXPathInStatusbar: false,
        uploader: { insertImageAsBase64URI: true },
        buttons: "bold,strikethrough,underline,italic,eraser,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,image,video,table,link,|,align,undo,redo,\n,selectall,cut,copy,paste,copyformat,|,hr,symbol,fullsize"
    }
    const handleChange=(value)=>{
        props.setAnswer({...props.answer,body:value});
    }
	return(<JoditEditor
            ref={editor}
            content={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={handleChange}
        />
    );
}
export default Editor;