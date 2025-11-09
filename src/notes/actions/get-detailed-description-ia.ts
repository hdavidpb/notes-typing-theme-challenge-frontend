import { apiTask } from "../../api/notes.api";

export const generateDetailedDescriptionIA = async (
  noteContent: string
): Promise<string> => {
    console.log("AQUI: ",noteContent)
  try {
    const { data } = await apiTask.post<{ response: string }>(
      "/gemini/generate-description",
      { prompt: noteContent }
    );

    return data.response;
  } catch (error) {
    return noteContent;
  }
};
