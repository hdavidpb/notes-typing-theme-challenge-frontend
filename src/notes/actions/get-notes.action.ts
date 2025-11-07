import { apiTask } from "../../api/notes.api";
import type { NotesResponse } from "../types/notes.response";
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
        const notes = Object.values(currentNotes).filter((note)=>note.title.toLowerCase().includes(query.toLowerCase()) || note.content.toLowerCase().includes(query.toLowerCase()) || note.tags.toLowerCase().includes(query.toLowerCase()));
        const newNotes = notes.reduce((acc,note)=> {
            acc[note.id] = note;
            return acc;
        },{} as Notes);
        currentNotes = newNotes;

        return currentNotes;
    }

    if(status === "archived") {
        const notes = Object.values(currentNotes).filter((note)=>note.status === "archived");
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



export const getAllNotes = async ({query,status,tag}:SearchTypes)=> {


    try {

        const {data} = await apiTask.get<NotesResponse[]>("/task/all",{params:{query,status,tag}});

        console.log({data})
        return data

    } catch (error) {
        return [];
    }

}