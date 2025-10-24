import type { Notes } from "../types/notes.type";

export const updateToggleStatusNote = async (
  noteId: string
): Promise<Notes> => {
  const parsedId = +noteId;

  const storageNotes: Notes = JSON.parse(localStorage.getItem("notes") || "{}");

  if (!storageNotes[parsedId]) return storageNotes;

  if (storageNotes[parsedId].status === "active") {
    storageNotes[parsedId].status = "archived";
  } else {
    storageNotes[parsedId].status = "active";
  }

  localStorage.setItem("notes",JSON.stringify(storageNotes))

  return storageNotes;
};
