import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";
import AppLayout from "./layouts/AppLayout";
import SettingsLayout from "./settings/layouts/SettingsLayout";
import NotesLayout from "./notes/layouts/NotesLayout";
import AuthLayout from "./auth/AuthLayout";
import LoginPage from "./auth/login/LoginPage";
import RegisterPage from "./auth/register/RegisterPage";
import { ProtectedRoute } from "./notes/components/ProtectedRoute";
import { ProtectedAuthRoute } from "./auth/components/ProtectedRoute";

const LazyNotes = lazy(() => import("./notes/pages/NotesPage"));
const ColorThemeLazePage = lazy(
  () => import("./settings/pages/ColorThemePage")
);
const FontThemeLazePage = lazy(() => import("./settings/pages/FontThemePage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/notes",
        element: <NotesLayout />,
        children: [
          {
            index: true,
            path: ":noteId",
            element: <LazyNotes />,
          },
        ],
      },
      {
        path: "/settings",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            path: "color-theme",
            element: <ColorThemeLazePage />,
          },
          {
            path: "font-theme",
            element: <FontThemeLazePage />,
          },
          {
            path: "*",
            element: <Navigate to="/settings/color-theme" />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <ProtectedAuthRoute>
        <AuthLayout />
      </ProtectedAuthRoute>
    ),
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/notes" />,
  },
]);
