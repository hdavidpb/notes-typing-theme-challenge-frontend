import type { Note, Notes } from "../types/notes.type";


export const getNoteByIdAction = async (noteId:string):Promise<Note> => {

    const storageNotes:Notes = JSON.parse(localStorage.getItem("notes") ?? "{}") as Notes ;

    if(isNaN(Number(noteId))) {
        return {
            title:"",
            content:"",
            tags:"",
        } as Note;
    }

    const note = storageNotes[+noteId];

    if(!note) {
        return {
            title:"",
            content:"",
            tags:"",
        } as Note;
    }

    return note;


};