import { pool } from '../database/db';
import Note from '../interfaces/note.interface';

export const getAllNotes = async (): Promise<Note[]> => {
  try {
    const query = 'SELECT * FROM Notes';
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(`Error fetching notes: ${error}`);
  }
};

export const getNoteById = async (id: number): Promise<Note | null> => {
  try {
    const query = 'SELECT * FROM Notes WHERE ID = @id';
    const result = await pool.request().input('id', id).query(query);
    return result.recordset[0] || null;
  } catch (error) {
    throw new Error(`Error fetching note: ${error}`);
  }
};

