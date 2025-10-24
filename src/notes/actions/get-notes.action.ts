import type {  Notes } from "../types/notes.type";

export type SearchTypes = {
    query?:string;
    tag?:string;
    status?:'active' | 'archived';

}

export const getNotesAction = async ({query,status,tag}:SearchTypes):Promise<Notes> => {

    const storageNotes = JSON.parse(localStorage.getItem("notes") ?? "{}") as Notes ;

    let currentNotes = {...storageNotes}

    await new Promise((resolve)=> {
        setTimeout(() =>  resolve(true), 1000);
    });


    if(query) {
        const notes = Object.values(currentNotes).filter((note)=>note.title.toLowerCase().includes(query.toLowerCase()) || note.tags.includes(query.toLowerCase()));
        const newNotes = notes.reduce((acc,note)=> {
            acc[note.id] = note;
            return acc;
        },{} as Notes);
        currentNotes = newNotes;

        return currentNotes;
    }

    if(status) {
        const notes = Object.values(currentNotes).filter((note)=>note.status === status);
        const newNotes = notes.reduce((acc,note)=> {
            acc[note.id] = note;
            return acc;
        },{} as Notes);
        currentNotes = newNotes;
    }

    if(tag){
        const notes = Object.values(currentNotes).filter((note)=>note.tags.toLowerCase().includes(tag.toLocaleLowerCase()));
        const newNotes = notes.reduce((acc,note)=> {
            acc[note.id] = note;
            return acc;
        },{} as Notes);
        currentNotes = newNotes;
    }




    return currentNotes;



}