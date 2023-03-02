import { render } from "@testing-library/react";
import React  from "react";
import Note from "./Note";

const data = {noteList: [{ heading: "heading1", content: "content1" },
    { heading: "heading2", content: "content2" },
    { heading: "heading3", content: "content3" },
    { heading: "heading4", content: "content4" },
    { heading: "heading5", content: "content5" },
    { heading: "heading7", content: "content7" }
    ]}
export default function ShowNotes(props){
    
    return(
        <>
        {data.noteList.map(element=> <Note headding={element.heading} content ={element.content}/>)}
        </>
    )
}