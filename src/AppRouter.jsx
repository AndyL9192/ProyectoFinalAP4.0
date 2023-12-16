import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { Page404 } from "./pages/Page404";
import { PostViajes } from "./pages/PostViajes";
import { PrivateRoutes } from "./components/privateRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Post" element={<PostViajes />} />
      </Route>

      <Route path="/register" element={<RegisterForm />} />

      <Route path="/login" element={<LoginForm />} />

      <Route path="*" element={Page404} />
    </Routes>
  );
};
