import { useParams } from "react-router";
import { NoteActions } from "../components/NoteActions";
import { NoteContent } from "../components/NoteContent";
import { useGetNoteById } from "../hooks/useGetNoteById";
import type { Note } from "../types/notes.type";



const NotesPage = () => {

  const { noteId } = useParams();
  
  const {data,mutation} = useGetNoteById(noteId!);

  if(!data) return <span className="self-start p-4">
    Cargando...
  </span>;


  const onSubmit = (note:Note) => {
    const newNote:Note =  {
      ...note,
      id:note.id ?? new Date().getTime(),
      updatedAt: new Date().getTime().toString(),
      
    }

     mutation.mutateAsync(newNote);
  }

  return (
    <>
      <NoteContent note={data} onSubmit={onSubmit}/>
      <NoteActions />
    </>
  );
};

export default NotesPage;
