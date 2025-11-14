import { useParams } from "react-router";
import { NoteActions } from "../components/NoteActions";
import { NoteContent } from "../components/NoteContent";
import { useGetNoteById } from "../hooks/useGetNoteById";
import type { Note, NoteToEdit } from "../types/notes.response";
import { Activity } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

const NotesPage = () => {
  const { noteId } = useParams();

  const { data, mutation, deleteNoteMutation, updateNoteStatusMutation } =
    useGetNoteById(noteId!);

  const isMobile = useIsMobile();

  if (!data) return <span className="self-start p-4">Cargando...</span>;

  const onSubmit = (note: NoteToEdit) => {
    const newNote: Note = {
      ...note,
      tags: note.tags.split(","),
    };

    mutation.mutateAsync(newNote);
  };

  const handleDeleteNote = () => {
    deleteNoteMutation.mutateAsync(noteId!);
  };

  const handleUpdateToggleStatusNote = () => {
    let status: "active" | "archived" = "archived";

    if (data.status === "active") {
      status = "archived";
    } else {
      status = "active";
    }

    updateNoteStatusMutation.mutateAsync(status);
  };

  return (
    <Activity mode={isMobile && !noteId ? "hidden" : "visible"}>
      <>
        <NoteContent
          note={data}
          onSubmit={onSubmit}
          handleDeleteNote={handleDeleteNote}
          isPendingToDelete={deleteNoteMutation.isPending}
          handleToggleNote={handleUpdateToggleStatusNote}
          isPendingToggleNote={updateNoteStatusMutation.isPending}
        />
        <Activity mode={isMobile ? "hidden" : "visible"}>
          {data.updatedAt && (
            <NoteActions
              note={data}
              handleDeleteNote={handleDeleteNote}
              isPendingToDelete={deleteNoteMutation.isPending}
              handleToggleNote={handleUpdateToggleStatusNote}
              isPendingToggleNote={updateNoteStatusMutation.isPending}
            />
          )}
        </Activity>
      </>
    </Activity>
  );
};

export default NotesPage;
