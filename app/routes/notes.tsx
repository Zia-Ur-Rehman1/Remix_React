import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import { getStoreNotes, storedNotes } from "../data/notes";
import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />;
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoreNotes();
  return notes;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  //   const noteData = {
  //     title: formData.get("title"),
  //     content: formData.get("content"),
  //   };
  const noteData = Object.fromEntries(formData);
  if (noteData.title.trim().length < 3 || noteData.content.trim().length < 3) {
    return { message: "Value should be greater than 3 characters" };
  }
  const existingNote = await getStoreNotes();
  noteData.id = new Date().toISOString();
  const updatedNote = existingNote.concat(noteData);
  await storedNotes(updatedNote);
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  return redirect("/notes");
};
