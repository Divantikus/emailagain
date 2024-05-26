import { QueryProvider } from "./provider/Provider.tsx";
import { App } from "./App.tsx";
import ReactDOM from "react-dom/client";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
