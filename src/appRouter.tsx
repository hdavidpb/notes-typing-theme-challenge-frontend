import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";
import AppLayout from "./layouts/AppLayout";
import SettingsLayout from "./settings/layouts/SettingsLayout";
import NotesLayout from "./notes/layouts/NotesLayout";




const LazyNotes = lazy(()=>import("./notes/pages/NotesPage"));
const ColorThemeLazePage = lazy(()=>import("./settings/pages/ColorThemePage"));
const FontThemeLazePage = lazy(()=>import("./settings/pages/FontThemePage"));

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/notes",
                element:<NotesLayout/>,
                children:[{
                    index:true,
                    path:":noteId",
                    element:<LazyNotes />
                }]
            },
            {
                path:"/settings",
                element:<SettingsLayout />,
                children:[
                    {
                        index:true,
                        path:"color-theme",
                        element:<ColorThemeLazePage/>
                    },
                    {
                        path:"font-theme",
                        element:<FontThemeLazePage />
                    },
                    {
                       path:"*",
                        element:<Navigate to="/settings/color-theme" /> 
                    }
                ]
            },
            
        ],
    },
    {
        path:"*",
        element:<Navigate to="/notes"/>
    }
])