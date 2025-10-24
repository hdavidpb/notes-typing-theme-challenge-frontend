import type  { Notes } from '../types/notes.type';


export const deleteNote = async (noteId:string):Promise<Notes> => {
    const parsedId = +noteId;

   const storageNotes:Notes = JSON.parse(localStorage.getItem("notes") || "{}") as Notes;

   if(!storageNotes[parsedId]) {
         return storageNotes;
   }

   delete storageNotes[parsedId];

   localStorage.setItem("notes",JSON.stringify(storageNotes))

   return storageNotes;

}