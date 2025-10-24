import {useQuery} from "@tanstack/react-query"
import { useNoteStore } from "../store/useNoteStore"
import type { SearchTypes } from "../actions/get-notes.action";

export const useGetNotes = ({query,status,tag}:SearchTypes) => {

  const getNotes = useNoteStore((store)=>store.getNotes);

  return  useQuery({
    queryKey:["notes",{query,status,tag}],
    queryFn:()=>getNotes({status,tag}),
    retry:false,
    staleTime: 1000 * 60 * 5, // 5 minutes,
  })
}
