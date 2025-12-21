import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ROUTES } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={ROUTES}></RouterProvider>
    </StrictMode>
  </Provider>
);
