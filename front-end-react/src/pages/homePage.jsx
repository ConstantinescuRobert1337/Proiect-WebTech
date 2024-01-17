import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../Components/NotesList";
import "./HomePage.css";
import Search from "../Components/Search";
import { nanoid } from "nanoid";

const SERVER_URL = "http://localhost:3000";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/notes`);
      setNotes(response.data.records);
    } catch (error) {
      console.error(
        "Eroare la luare notita:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const [searchText, setSearchText] = useState("");

  const addNote = async (text) => {
    const date = new Date();
    const newNote = {
      noteBody: text,
      noteDate: date.toLocaleDateString(),
    };
    await axios.post(`${SERVER_URL}/notes`, newNote).then((response) => {
      setNotes([...notes, { ...newNote, noteId: response.data.noteId }]);
    });
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.noteId !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container-note">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.noteBody.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default HomePage;
