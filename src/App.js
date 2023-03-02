import './App.css';
import Note from './containers/Note';
import { useEffect, useState } from 'react';
import AddNote from './containers/AddNote';
// const NotesObj = {
//   Notes: [{ headding: "headding", content: "contents is " }]
// };

function App() {
  const [note,setNote] = useState({})
  useEffect(()=>{
  //let notesString=localStorage.getItem("notes")
  //let notesObject = JSON.parse(notesString)
 // notesObject.notesList = notesObject.notesList
  let notesObject ={notesList:[]}
  notesObject.notesList.push(note)
  localStorage.setItem("notes",JSON.stringify(notesObject))
  console.log("localstorage",localStorage.getItem("notes"))
  },[note])
  const saveNote = (note) => {
    setNote(note)
  };
  
  return (
    <div className="App">
      {/* <Note headding= {notes.Notes[0].headding} content={notes.Notes[0].content} saveNote = {saveNote} /> */}
      <AddNote saveNote ={saveNote}/>
    </div>
  );
}

export default App;
