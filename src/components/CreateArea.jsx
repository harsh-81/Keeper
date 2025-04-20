import { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  }

  function submitNote(e) {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
