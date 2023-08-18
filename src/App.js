import './App.css';
import NotesList from "./components/notesList";
import AddNote from "./components/addNote";

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>Note App</h1>
          {<AddNote/>}
          {<NotesList/>}
      </div>

    </div>
  );
}

export default App;
