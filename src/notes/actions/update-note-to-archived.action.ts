import { apiTask } from "../../api/notes.api";
import type { Note } from "../types/notes.response";




export const updateNoteStatus = async (
  noteId:string,
  status:'active' | 'archived'
): Promise<string>  => {
  try {
      await apiTask.patch<Partial<Note>>(
        `/task/${noteId}`,{status}
      );

      return noteId;
  } catch (error) {
    return noteId;
  }
};
