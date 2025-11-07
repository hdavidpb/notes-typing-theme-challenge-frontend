import { apiTask } from "../../api/notes.api";
import type { Note } from "../types/notes.response";


export type SearchTypes = {
    query?:string;
    tag?:string;
    status?:'active' | 'archived';

}





export const getAllNotes = async ({query,status,tag}:SearchTypes)=> {


    try {

        const {data} = await apiTask.get<Note[]>("/task/all",{params:{query,status,tag}});

        console.log({data})
        return data

    } catch (error) {
        return [];
    }

}