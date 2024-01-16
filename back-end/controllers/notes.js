import { Op } from "sequelize";
import { notes } from "../models/notes.js";

export const getNotes = async (req, res) => {
    const titleQuery = req.query.title;
    const where = titleQuery ? { noteTitle: { [Op.like]: `%${titleQuery}%` } } : {};
    const notesList = await notes.findAll({ where: where });
    res.status(200).send({records: notesList});
<<<<<<< HEAD
}

export const getNoteById = async (req, res) => {
    const noteId = req.params.noteId;
    const note = await notes.findOne({ where: { noteId: noteId } });
    if (note) {
        res.status(200).send(note);
    } else {
        res.status(404).send({ message: `Nu am găsit nicio notă cu id-ul ${noteId}.` });
    }
}

export const createNote = async (req, res) => {
    const note = req.body;
    const newNote = await notes.create(note);
    res.status(201).send(newNote);
}

export const updateNote = async (req, res) => {
    const noteId = req.params.noteId;
    const note = req.body;
    const updatedNote = await notes.update(note, { where: { noteId: noteId } });
    if (updatedNote) {
        res.status(200).send({ message: `Nota cu id-ul ${noteId} a fost actualizată.` });
    } else {
        res.status(404).send({ message: `Nu am găsit nicio notă cu id-ul ${noteId}.` });
    }
}

export const deleteNote = async (req, res) => {
    const noteId = req.params.noteId;
    const deletedNote = await notes.destroy({ where: { noteId: noteId } });
    if (deletedNote) {
        res.status(200).send({ message: `Nota cu id-ul ${noteId} a fost ștearsă.` });
    } else {
        res.status(404).send({ message: `Nu am găsit nicio notă cu id-ul ${noteId}.` });
    }
}



=======
}
>>>>>>> 90453e5c1bc0d73805cc485016dba5e7575dd592
