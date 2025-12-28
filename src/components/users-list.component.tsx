import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { User } from "../shared/model";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type UserListProps = {
  users: User[];
  deleteUser: (user: User) => void;
};

export default function UserList({ users, deleteUser }: UserListProps) {
  const navigation = useNavigate();
  const [filterData, setFilterData] = useState<User[]>(users);

  useEffect(() => {
    setFilterData(users);
  }, [users]);
  const deleteMethod = (user: User) => {
    deleteUser({ ...user });
  };

  const updateMethod = (user: User) => {
    navigation("/add-new-user", { state: { user, method: "Update" } });
  };

  const filterUser = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const searchTerm = e.target.value.toLocaleLowerCase().trim();
    if (searchTerm.length > 0) {
      const userData = users;
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
      setFilterData(users);
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
          label="Search User"
          variant="standard"
          onChange={filterUser}
        />

        <Button variant="contained" component={NavLink} to="/add-new-user">
          Add New User
        </Button>
      </Box>
      <div style={{ padding: "15px" }}>
        <TableContainer component={Paper}>
          <Table
            size="small"
            aria-label="simple table"
            sx={{
              border: "1px solid rgba(224, 224, 224, 1)",
              borderCollapse: "collapse",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", border: "1px solid #e0e0e0" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "1px solid #e0e0e0" }}
                >
                  City
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "1px solid #e0e0e0" }}
                >
                  State
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "1px solid #e0e0e0" }}
                >
                  Country
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "1px solid #e0e0e0" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filterData.length > 0 ? (
                filterData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #e0e0e0" }}
                    >
                      {row.city}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #e0e0e0" }}
                    >
                      {row.states}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #e0e0e0" }}
                    >
                      {row.country}
                    </TableCell>

                    <TableCell align="center">
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon
                            color="secondary"
                            onClick={() => deleteMethod(row)}
                          />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <IconButton>
                          <EditIcon
                            color="secondary"
                            onClick={() => updateMethod(row)}
                          />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    {users.length === 0
                      ? " No records found"
                      : "No matching records"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
