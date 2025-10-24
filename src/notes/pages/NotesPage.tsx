import { useParams } from "react-router";
import { NoteActions } from "../components/NoteActions";
import { NoteContent } from "../components/NoteContent";
import { useGetNoteById } from "../hooks/useGetNoteById";
import type { Note } from "../types/notes.type";



const NotesPage = () => {

  const { noteId } = useParams();
  
  const {data,mutation,deleteNoteMutation,updateNoteStatusMutation} = useGetNoteById(noteId!);

  if(!data) return <span className="self-start p-4">
    Cargando...
  </span>;


  const onSubmit = (note:Note) => {
    const newNote:Note =  {
      ...note,
      id:note.id ?? new Date().getTime(),
      updatedAt: new Date().getTime(),
      
    }

     mutation.mutateAsync(newNote);
  }

  const handleDeleteNote = ()=>{
    deleteNoteMutation.mutateAsync(noteId!)
  };

  
  const handleUpdateToggleStatusNote = ()=>{
    updateNoteStatusMutation.mutateAsync(noteId!)
  };
 
 

  return (
    <>
      <NoteContent note={data} onSubmit={onSubmit}/>
      {data.updatedAt && ( <NoteActions  note={data} handleDeleteNote={handleDeleteNote} isPendingToDelete={deleteNoteMutation.isPending} handleToggleNote={handleUpdateToggleStatusNote} isPendingToggleNote={updateNoteStatusMutation.isPending}/>)}
    </>
  );
};

export default NotesPage;
