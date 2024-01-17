import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../Components/NotesList";
import "./HomePage.css";
import { useState } from "react";
import { nanoid } from "nanoid";

const HomePage = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "17/01/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "18/01/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "20/01/2024",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "19/01/2024",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container-note">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default HomePage;
