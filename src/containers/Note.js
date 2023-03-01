import React, { useState } from "react";
export default function Note(Props) {
  const [headding, setHeadding] = useState(Props.headding);
  const [content, setContent] = useState(Props.content);
  const [editable, setEditable] = useState(false);
//   onSaveClick = () => {
//     console.log("onSaveClick button ");
//     setEditable(false);
//     Props.saveNote();
//   };
const onEditClick =  () => {
  setEditable(true)
    console.log("hii")

 }
  
 const onInputChange = (e) => {
    setContent(e.target.value);
    console.log("onInputChange", e.target.value);
  };
  return (
    <div /*className="NoteBox" */>
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
          <h3> {content} </h3>
        </>
      )}

      <button className="Buttons" onClick={onEditClick}>
        edit
      </button>
      <button className="Buttons" /*onClick={this.onSaveClick}*/>
        save
      </button>
    </div>
  );
}

/*
Notes should do is edit content, edit heading 

state 
*/
