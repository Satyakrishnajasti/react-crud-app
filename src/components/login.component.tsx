import { useAuth0 } from "@auth0/auth0-react";
import UserListPage from "../pages/user-list.pages";
import { useEffect } from "react";
import Logout from "./logout.component";

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const time = new Date().toLocaleString();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      {isAuthenticated ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 15,
            }}
          >
            <p>
              <b>Email:</b> {user?.name}
            </p>
            <p>
              <b>Time:</b>
              {time}
            </p>
            <Logout />
          </div>
          <UserListPage />
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      )}
    </>
  );
}
