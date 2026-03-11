import express from 'express'
import { createNote, getNoteById, deleteNotes, getAllNotes, updateNotes } from '../Controllers/NoteControllers.js';

const router = express.Router()

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);

export default router;