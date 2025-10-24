import { Link, useLocation, useParams, useSearchParams } from "react-router";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { useGetNotes } from "../hooks/useGetNotes";

import { NoteCard } from "./NoteCard";
import { UIButton } from "../../components/ui/UIButton";
import { memo } from "react";



export const NotesList = memo(() => {
  const { noteId } = useParams();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  const tag = (searchParams.get("tag") || '');
  const status = (searchParams.get("type") || 'all') as "active" | "archived";


  const { isLoading,data } = useGetNotes({status,tag});
  

  if ( !data || isLoading)
    return <span className="self-start p-4 md:w-[290px]">Cargando...</span>;


  return (
    <aside
      className={`md:w-[290px] h-full flex flex-col justify-start items-center  px-5 py-5 bg-neutral-0 dark:bg-neutral-950 ${
        !noteId ? "border-r border-neutral-200" : ""
      }`}
    >
      <Link to={`/notes/create${location.search}`}>
        <UIButton className="flex justify-center items-center gap-2 w-full">
          <PlusIcon />
          <span>Create New Note</span>
        </UIButton>
      </Link>
      <div className="w-full flex-1 flex-col justify-start items-center overflow-y-auto mt-4">
        {Object.values(data).map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </aside>
  );
});
