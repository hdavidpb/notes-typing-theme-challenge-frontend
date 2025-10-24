import { create } from "zustand";
import type { Note, Notes } from "../types/notes.type";
import { getNotesAction, type SearchTypes } from "../actions/get-notes.action";
import { updateNotesAction } from "../actions/post-update-notes.action";

type NoteStore = {
  notes: Notes;
  getNotes:(searchTypes:SearchTypes)=>Promise<Notes>;
  updateNotes:(note:Note)=>Promise<Notes>;
};

export const useNoteStore = create<NoteStore>((set) => ({ 
    notes: {},
    getNotes:async({query,status,tag}:SearchTypes)=> {
        const notes = await getNotesAction({query,status,tag});
        set({notes});
        return notes;
    },
    updateNotes:async(note:Note)=> {
        const notes = await updateNotesAction(note);
        set({notes});
        localStorage.setItem("notes",JSON.stringify(notes));
        return notes;
    },



 }));
