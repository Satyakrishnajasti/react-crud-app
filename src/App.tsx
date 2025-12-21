import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

const NewForm = lazy(() => import("./pages/add-user.pages"));
const UserListPage = lazy(() => import("./pages/user-list.pages"));

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <UserListPage />,
    children: [],
  },
  {
    path: "add-new-user",
    element: <NewForm />,
  },
]);

function App() {
  return <></>;
}

export default App;
