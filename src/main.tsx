import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ROUTES } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Auth0Provider
        domain="dev-7n8ykgg1lb7ave5i.us.auth0.com"
        clientId="9h3zF8rkn2IsOuPkZGmQoPjc1ZqFhjlH"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={ROUTES}></RouterProvider>
      </Auth0Provider>
    </StrictMode>
  </Provider>
);
