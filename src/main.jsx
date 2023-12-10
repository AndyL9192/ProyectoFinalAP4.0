import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import "./index.css";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
