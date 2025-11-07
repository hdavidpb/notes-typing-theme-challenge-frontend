import {useQuery} from "@tanstack/react-query"
import { getAllNotes, type SearchTypes } from "../actions/get-notes.action";

export const useGetNotes = ({query,status,tag}:SearchTypes) => {


  return  useQuery({
    queryKey:["notes",{query,status,tag}],
    queryFn:()=>getAllNotes({status,tag,query}),
    retry:false,
    staleTime: 1000 * 60 * 5, // 5 minutes,
  })
}
