import { useDispatch, useSelector } from "react-redux";
import UserListComponent from "../components/users-list.component";
import type { User, UserList } from "../shared/model";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { deleteUser } from "../store/data-slice";

export default function UserListPage() {
  const data = useSelector((state: UserList) => state.data);
  const dispatch = useDispatch();
  const deleteMethod = (user: User) => {
    dispatch(deleteUser({ ...user }));
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
        p={2}
      >
        <Typography variant="h4" component="h1">
          User List
        </Typography>

        <Button variant="contained" component={NavLink} to="/add-new-user">
          Add New User
        </Button>
      </Box>
      <UserListComponent users={data.users} deleteUser={deleteMethod} />
    </>
  );
}
