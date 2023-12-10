import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};
