import { createRoot } from "react-dom/client";

import App from "./App";

let appContainer = document.getElementById("app");
let root = createRoot(appContainer);

root.render(<App />);
