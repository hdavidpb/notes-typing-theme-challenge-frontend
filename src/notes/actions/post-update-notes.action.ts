import type { Note, Notes } from "../types/notes.type";


export const updateNotesAction = async (note:Note):Promise<Notes> => {

    const  storageNotes:Notes = JSON.parse(localStorage.getItem("notes") ?? "{}") as Notes ;

    let newNotes = {...storageNotes};


    if(storageNotes[note.id]) { 
        newNotes = {
            ...newNotes,
            [note.id]:note
        };
        
        return newNotes;
    };

    newNotes[note.id] = note;
    
    return newNotes;
}