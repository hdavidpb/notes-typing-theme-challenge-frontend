import { Outlet } from "react-router"

import { NotesList } from "../components/NotesList"


const NotesLayout = () => {
  return (
     <section className="w-full flex justify-start  md:h-[calc(100dvh-81px)]">
            <NotesList />
            <Outlet/>
       </section>
  )
}

export default NotesLayout