import { apiTask } from "../../api/notes.api";
import type { Note } from "../types/notes.response";





export const getNoteById = async (noteId:string):Promise<Note | null>=> {

   if(noteId === "create") {
        return {
            title:"",
            description:"",
            tags:[],
            status:""

        } as Note;
   }

    try {

        const {data} = await apiTask.get<Note>(`/task/${noteId}`);

        console.log({data})
        return data

    } catch (error) {
        return null;
    }

}