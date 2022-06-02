import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Home from "./components/Home";
import "./index.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render( // 👈️ deprecated starting React 18
  <StrictMode>
    <Home />
  </StrictMode>
);
