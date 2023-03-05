import React, { useState } from "react";
import '../index.css'
export default function Note(Props) {
  const [headding, setHeadding] = useState(Props.headding);
  const [content, setContent] = useState(Props.content);
  const [editable, setEditable] = useState(false);
 const onSaveClick = () => {
   
   // Props.saveNote(content);
   // console.log("onSaveClick button ");
    setEditable(false);
    
  };
const onEditClick =  () => {
  setEditable(true)
 }
  
 const onInputChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className="noteBox" >
      <h1> {headding} </h1>
      {editable === true ? (
        <>
          <h3>
            <input
              type="text"
              defaultValue={Props.content}
              onChange={onInputChange}
            />
          </h3>
        </>
      ) : (
        <>
          <h3> {Props.content} </h3>
        </>
      )}

      <button className="Buttons" onClick={onEditClick}>
        edit
      </button>
      <button className="Buttons" onClick={onSaveClick}>
        save
      </button>
    </div>
  );
}

/*
Notes should do is edit content, edit heading 

state 
*/
