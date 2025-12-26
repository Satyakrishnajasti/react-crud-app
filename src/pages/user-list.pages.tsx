import { useDispatch, useSelector } from "react-redux";
import UserListComponent from "../components/users-list.component";
import type { User, UserList } from "../shared/model";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";
import { deleteUser } from "../store/data-slice";
import { useState } from "react";

export default function UserListPage() {
  const data = useSelector((state: UserList) => state.data);
  const [filterData, setFilterData] = useState<User[]>(data.users);

  const dispatch = useDispatch();
  const deleteMethod = (user: User) => {
    dispatch(deleteUser({ ...user }));
  };

  const filterUser = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      const userData = data.users;
      const search = userData.filter((element) => {
        return (
          element.name.trim().toLowerCase().includes(searchTerm) ||
          element.city.trim().toLowerCase().includes(searchTerm) ||
          element.country.trim().toLowerCase().includes(searchTerm) ||
          element.states.trim().toLowerCase().includes(searchTerm)
        );
      });

      setFilterData(search);
    } else {
      setFilterData(data.users);
    }
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

        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => filterUser(e)}
        />

        <Button variant="contained" component={NavLink} to="/add-new-user">
          Add New User
        </Button>
      </Box>
      <UserListComponent users={filterData} deleteUser={deleteMethod} />
    </>
  );
}
