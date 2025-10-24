import {useForm} from "react-hook-form"

import { ClockCircleIcon } from "../../components/icons/ClockCircleIcon";
import { TagIcon } from "../../components/icons/TagIcon";
import { UIButton } from "../../components/ui/UIButton";
import type { Note } from "../types/notes.type";
import { formattedDate } from "../../utils/formatedDate";



interface Props {
  note:Note;
  onSubmit: (note: Note) => void

}

export const NoteContent = ({note,onSubmit}:Props) => {

  const {register,handleSubmit,formState:{errors}} = useForm({
    values:note,
  })

  const onSubmitted = handleSubmit((values)=> {
    onSubmit({...values,status:"active"});

  })



  return (
    <form onSubmit={onSubmitted} className="flex-1 h-full bg-neutral-0 dark:bg-neutral-950 px-6 py-5 flex flex-col justify-start items-start border-x border-neutral-200 dark:border-neutral-800 dark:text-neutral-0">
      <div className="w-full flex flex-col justify-start items-start border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-full h-[29px] mb-4">
          <input
            className={`w-full h-full text-2xl bg-transparent  outline-none pl-0.5  ${errors.title ? "border-b border-red-500 transition-all ease-in-out duration-300" : "border-none"}`}
            placeholder="Enter a title..."
            {...register("title",{validate:(value)=>!!value.trim() || "El titulo es requerido." })}
          />
        </div>
        <div className="w-full flex justify-start items-start gap-2 mb-2">
          <div className="flex justify-start items-center gap-1.5 w-[115px]">
            <TagIcon width={16} height={16} />
            <span>Tags</span>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
          <input
            className={`w-full outline-none text-sm placeholder:text-neutral-400  ${errors.tags ? "border-b border-red-500 transition-all ease-in-out duration-300" : "border-none"}`}
            placeholder="Add tags separated by commas (e.g. Work, Planing)"
            {...register("tags",{required:{
              value:true,message:"Tags are required."
            },validate:(value)=>{
              const valueArr = value.split(",");
              if(valueArr.length === 0) return "You must add at least one tag";
              if(value.startsWith(",")) return "Value must not start with comma"

              }})
            } 
          />
        {errors.tags && (<span className="text-xs text-red-500">{errors.tags.message}</span>)}

          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-2 mb-4">
          <div className="flex justify-start items-center gap-1.5 w-[115px]">
            <ClockCircleIcon width={16} height={16} />
            <span>Last edited</span>
          </div>
          <span className="text-sm text-neutral-400"> {note.updatedAt ? formattedDate(note.updatedAt): "Not yet saved"}</span>
        </div>
      </div>
      <div className="w-full flex-1 mt-4 border-b border-neutral-200 dark:border-neutral-800">
        <textarea
          className={`w-full h-full outline-none pr-0.5 resize-none ${errors.content ? "border-b border-red-500 transition-all ease-in-out duration-300" : "border-none"}`}
          placeholder="Start typing note here..."
          {...register("content",{validate:(value)=>!!value.trim() || "Este campo es requerido." })}
        />
      </div>

      <div className="w-full flex justify-start items-center gap-4 mt-4">
        <UIButton type="submit">Save Note</UIButton>
        <UIButton type="button"  btnType="secondary">Cancel</UIButton>
      </div>
    </form>
  );
};
