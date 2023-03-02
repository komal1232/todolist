import './App.css';
import Note from './containers/Note';
import { useEffect, useState } from 'react';
import AddNote from './containers/AddNote';
import ShowNotes from './containers/ShowNotes';
// const NotesObj = {
//   Notes: [{ headding: "headding", content: "contents is " }]
// };

function App() {
  const [note,setNote] = useState({})
  useEffect(()=>{
  //console.log("localstorage",localStorage.getItem("x"))
  //let notesString=localStorage.getItem("notes")
  if(JSON.stringify(note)!=="{}"){
  if(!localStorage.getItem("notes")){
    let notesObject ={notesList:[]}
    notesObject.notesList.push(note)
    localStorage.setItem("notes",JSON.stringify(notesObject))
  }
  else{
  let notesString =localStorage.getItem("notes")
  let notesObject = JSON.parse(notesString)
  notesObject.notesList.push(note)
  localStorage.setItem("notes",JSON.stringify(notesObject))
  }
  }
  },[note])
  const saveNote = (note) => {
    setNote(note)
  };
  
  return (
    <div>
      {/* <Note headding= {notes.Notes[0].headding} content={notes.Notes[0].content} saveNote = {saveNote} /> */}
      {/* <AddNote saveNote ={saveNote}/> */}
      <div>hii</div>
      <ShowNotes/>
    </div>
  );
}

export default App;

