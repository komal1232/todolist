import logo from './logo.svg';
import './App.css';
import Note from './containers/Note';

function App() {
  const NotesObj = {
    Notes: [{ headding: "headding", content: "contents is " }]
  };
  const saveNote = (e) => {
    NotesObj.Notes[0].content = e;
    const NotesString = JSON.stringify(NotesObj);
    localStorage.setItem("notes", NotesString);
    console.log("inside saveNote");
  };
  return (
    <div className="App">
      <Note headding= {NotesObj.Notes[0].headding} content={NotesObj.Notes[0].content} saveNote = {saveNote} />
    </div>
  );
}

export default App;
