import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { TareasPage } from "./pages/TareasPage";
import { TareasIdPage } from "./pages/TareasIdPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/perfil" element={<ProfilePage />} />
      <Route path="/tareas" element={<TareasPage />} />
      <Route path="/tareas:/tareasid" element={<TareasIdPage />} />
    </Routes>
  );
}
