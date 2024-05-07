import { QueryProvider } from "./provider/Provider.tsx";
import { App } from "./App.tsx";
import ReactDOM from "react-dom/client";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryProvider>
    <App />
  </QueryProvider>
  // </React.StrictMode>
);
