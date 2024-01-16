import { Op } from "sequelize";
import { notes } from "../models/notes.js";

export const getNotes = async (req, res) => {
    const titleQuery = req.query.title;
    const where = titleQuery ? { noteTitle: { [Op.like]: `%${titleQuery}%` } } : {};
    const notesList = await notes.findAll({ where: where });
    res.status(200).send({records: notesList});
}