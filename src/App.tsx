import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { Suspense } from "react";

const NewForm = lazy(() => import("./pages/add-user.pages"));
const Login = lazy(() => import("./components/login.component"));

export const ROUTES = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<p>Loading</p>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "add-new-user",
    element: (
      <ProtectedRoute>
        <NewForm />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <></>;
}

export default App;
