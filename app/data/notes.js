import fs from 'fs/promises';
export async function getStoreNotes() {
  const notes = await fs.readFile('notes.json');
  const data = JSON.parse(notes);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storedNotes(notes) {
    return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}