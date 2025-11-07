import { apiTask } from "../../api/notes.api";

export const deleteNote = async (noteId: string): Promise<boolean> => {
  try {
    await apiTask.delete<{ message: string; deletedCount: number }>(
      `task/${noteId}`
    );

    return true;
  } catch (error) {
    return false;
  }
};
