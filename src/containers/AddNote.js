import React, { useState } from "react"

export default function AddNote (props){
    const [headding,setHeadding]= useState("")
    const [content,setContent]= useState("")
    const onSaveClick = () => {
        if(headding!="" && content!=""){
        props.saveNote({headding,content})
        setHeadding("")
        setContent("")
        }
      };
    const onHeadingChange = (e) =>{
        setHeadding(e.target.value)

    }
    const onContentChange = (e) =>{
        setContent(e.target.value)

    }

    return (
        <div>
            <input
              type="text"
              defaultValue={headding}
              onChange={onHeadingChange}
            />
             <input
              type="text"
              defaultValue={content}
              onChange={onContentChange}
            />
<button className="Buttons" onClick={onSaveClick}>
        save
      </button>
        </div>
    )


}