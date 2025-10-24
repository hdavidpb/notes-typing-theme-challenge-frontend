import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getNoteByIdAction } from "../actions/get-note-by-id.action"
import { useNoteStore } from "../store/useNoteStore";
import { useNavigate } from "react-router";
import { deleteNote } from "../actions/delete-note.action";
import { updateToggleStatusNote } from "../actions/update-note-to-archived.action";



export const useGetNoteById = (noteId:string) => {
  const navigate = useNavigate();

 
  const queryClient =  useQueryClient();

    const updateNotes = useNoteStore((store)=> store.updateNotes);


    const query = useQuery({
        queryKey:["note",{noteId}],
        queryFn:()=>getNoteByIdAction(noteId),
        retry:false,
        staleTime: 60 * 1000 * 5, // 5 minutes
    });

    const mutation = useMutation({
        mutationFn:updateNotes,
        onSuccess: (value) => {
            console.log("SE AGREGO O ACTUALIZO NOTES: ",value);

            //TODO: Agregar toast
 
            queryClient.invalidateQueries({ queryKey: ["notes","note"],type:'all' });

            const noteRefId = value[+noteId].id;

           navigate(`/notes/${noteRefId}${window.location.search}`);
        }
    });

    const deleteNoteMutation =  useMutation({
        mutationFn:deleteNote,
        onSuccess: (value) => {
           //TODO: Agregar toast
            console.log("SE ELIMINO LA NOTA: =>  ",value);
            queryClient.invalidateQueries({ queryKey: ["notes"],type:'all' });
           navigate(`/notes/create`);
        }
    });

        const updateNoteStatusMutation =  useMutation({
        mutationFn:updateToggleStatusNote,
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
