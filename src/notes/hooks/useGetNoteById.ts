import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getNoteById } from "../actions/get-note-by-id.action"
import { useNavigate } from "react-router";
import { deleteNote } from "../actions/delete-note.action";
import { updateNoteStatus } from "../actions/update-note-to-archived.action";
import { updateNote } from "../actions/post-update-notes.action";
export const useGetNoteById = (noteId:string) => {
  const navigate = useNavigate();
  const queryClient =  useQueryClient();

    const query = useQuery({
        queryKey:["note",{noteId}],
        queryFn:()=>getNoteById(noteId),
        retry:false,
        staleTime: 60 * 1000 * 5, // 5 minutes
    });

    const mutation = useMutation({
        mutationFn:updateNote,
        onSuccess: (note) => {
            console.log("SE AGREGO O ACTUALIZO LA TAREA: ",note);

            if(note) {
              
              //TODO: Agregar toast
   
              queryClient.invalidateQueries({ queryKey: ["notes"],type:'all' });
              queryClient.invalidateQueries({ queryKey: ["note"],type:'active' });
              // let noteRefId:number;
              // if(isNaN(+noteId)) {
              //   const notesKeys = Object.values(notes);
              //   const lastNote = notesKeys[notesKeys.length - 1];
              //   noteRefId = notes[lastNote.id].id;
              // }else {
              //   noteRefId = notes[+noteId].id;
              // }
  
  
             navigate(`/notes/${note._id}${window.location.search}`);
            }

        }
    });

    const deleteNoteMutation =  useMutation({
        mutationFn:deleteNote,
        onSuccess: (value) => {
           //TODO: Agregar toast
           

           if(value) {
             queryClient.invalidateQueries({ queryKey: ["notes"],type:'all' });
            navigate(`/notes/create`);
           }else {
            window.alert("Ocurrió un error inesperado!")
           }

        }
    });

        const updateNoteStatusMutation =  useMutation({
        mutationFn:(status:'active' | 'archived')=>updateNoteStatus(noteId,status),
        onSuccess: (value) => {
           //TODO: Agregar toast
            console.log("SE ARCHIVO  LA NOTA: =>  ",value);
            queryClient.invalidateQueries({ queryKey: ["notes"],type:'all' });
             queryClient.invalidateQueries({ queryKey: ["note"],type:'all' });

             if(window.location.search.includes("archived")) {
              navigate(`/notes/${window.location.search}`);
              return;
             }

           navigate(`/notes/${noteId}${window.location.search}`);
        }
    });


  return {
    mutation,
    deleteNoteMutation,
    updateNoteStatusMutation,
    ...query,

  }
}
