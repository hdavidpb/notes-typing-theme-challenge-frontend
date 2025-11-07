import { apiTask } from "../../api/notes.api";
import type { Note } from "../types/notes.response";



export const updateNote = async (
  note: Partial<Note>
): Promise<Partial<Note> | null>  => {
  try {
    if (note._id) {
        await apiTask.patch<Partial<Note>>(
        `/task/${note._id}`,note
      );

      return note;
    }

    const { data } = await apiTask.post<Partial<Note>>(
      "/task/create",
      note
    );

    return data;
  } catch (error) {
    return null;
  }
};
