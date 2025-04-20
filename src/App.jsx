import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prev => [...prev, newNote]);
  }

  function deleteNote(id) {
    setNotes(prev => prev.filter((_, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} {...note} onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
