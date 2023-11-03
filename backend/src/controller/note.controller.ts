import { Request, Response } from 'express';
import * as noteHelpers from '../dbhelpers/note.helpers';

export const getAllNotes = async (_req: Request, res: Response) => {
  try {
    const notes = await noteHelpers.getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await noteHelpers.getNoteById(parseInt(id));
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

