import { useLocation, useNavigate, useParams } from "react-router";
import { formattedDate } from "../../utils/formatedDate";
import type { Note } from "../types/notes.response";

interface Props {
  note:Note;
}

export const NoteCard = ({note}:Props) => {
  
  const {noteId} = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = ()=> {
    navigate(`/notes/${note._id}${location.search}`);

  }

  return (
    <div onClick={handleClick} className={`cursor-pointer w-full flex flex-col justify-start items-start gap-3 p-2 dark:text-neutral-0 text-neutral-900  border-b border-neutral-200 dark:border-neutral-800 hover:dark:bg-neutral-800 transition-all ease-in-out duration-300 hover:bg-neutral-100 hover:rounded-lg ${noteId === String(note._id) ? "bg-neutral-100 dark:bg-neutral-800 rounded-lg":"dark:bg-neutral-950"}`}>
      <h5 className="font-semibold">{note.title}</h5>
      <div className="flex justify-start items-center gap-1 flex-wrap">
        {note.tags.map((tag)=> (
          <span key={tag} className={`px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs rounded-sm `}>
            {tag.trim()}
          </span>
        ))}

      </div>
      {note.updatedAt && (<span className="text-xs"> {formattedDate(new Date(note.updatedAt).getTime()) }</span>)}
      
    </div>
  );
};
