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
import { useNavigate } from "react-router-dom";

type UserListProps = {
  users: User[];
  deleteUser: (user: User) => void;
};

export default function UserList({ users, deleteUser }: UserListProps) {
  const navigation = useNavigate();
  const deleteMethod = (user: User) => {
    deleteUser({ ...user });
  };

  const updateMethod = (user: User) => {
    navigation("/add-new-user", { state: { user, method: "Update" } });
  };
  return (
    <>
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
              {users.map((row) => (
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
