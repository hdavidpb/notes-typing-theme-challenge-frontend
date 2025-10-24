import {   useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getNoteByIdAction } from "../actions/get-note-by-id.action"
import { useNoteStore } from "../store/useNoteStore";
import { useLocation, useNavigate } from "react-router";



export const useGetNoteById = (noteId:string) => {
  const navigate = useNavigate();
  const location = useLocation();
  
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
 
            
            queryClient.invalidateQueries({ queryKey: ["notes"],type:'all' });
            
            const keys = Object.keys(value);
           navigate(`/notes/${keys[keys.length - 1]}${location.search}`);
        }
    })


  return {
    ...query,
    mutation

  }
}
