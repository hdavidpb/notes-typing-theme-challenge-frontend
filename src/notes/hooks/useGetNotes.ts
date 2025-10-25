import {useQuery} from "@tanstack/react-query"
import { getNotesAction, type SearchTypes } from "../actions/get-notes.action";

export const useGetNotes = ({query,status,tag}:SearchTypes) => {


  return  useQuery({
    queryKey:["notes",{query,status,tag}],
    queryFn:()=>getNotesAction({status,tag,query}),
    retry:false,
    staleTime: 1000 * 60 * 5, // 5 minutes,
  })
}
