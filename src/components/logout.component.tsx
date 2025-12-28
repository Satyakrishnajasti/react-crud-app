import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <>
      <Button
        variant="outlined"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        {" "}
        Logout
      </Button>
    </>
  );
}
