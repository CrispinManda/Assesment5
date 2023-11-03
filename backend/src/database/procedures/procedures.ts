import { pool } from './db';

export const createNoteProcedure = async (note: Note): Promise<number> => {
  try {
    const request = pool.request();
    request.input('Title', note.Title);
    request.input('Content', note.Content);
    const result = await request.execute('CreateNoteProcedure');
    return result.recordset[0].ID;
  } catch (error) {
    throw new Error(`Error creating note: ${error}`);
  }
};

export const updateNoteProcedure = async (note: Note): Promise<void> => {
  try {
    const request = pool.request();
    request.input('ID', note.ID);
    request.input('Title', note.Title);
    request.input('Content', note.Content);
    await request.execute('UpdateNoteProcedure');
  } catch (error) {
    throw new Error(`Error updating note: ${error}`);
  }
};
