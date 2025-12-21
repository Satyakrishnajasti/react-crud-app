import TextField from "@mui/material/TextField";
import { useState } from "react";
import type { User } from "../shared/model";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "./add-user.module.css";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

type NewFormProps = {
  onSubmitForm: (data: User) => void;
};

export default function NewForm({ onSubmitForm }: NewFormProps) {
  const { state } = useLocation();
  const [name, setName] = useState(state?.user.name);
  const [city, setCity] = useState(state?.user.city);
  const [states, setState] = useState(state?.user.states);
  const [country, setCountry] = useState(state?.user.country);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const method = state?.method;
    onSubmitForm({
      name,
      city,
      states,
      country,
      method,
    });
  };

  return (
    <div className={styles.header}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="h1" textAlign={"center"}>
            {state?.method === "Update" ? "Update User" : " Add New User"}
          </Typography>
          <div
            style={{
              padding: "5px",
              width: "400px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                margin="dense"
                fullWidth
                label="Name"
                variant="standard"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={state?.method === "Update"}
              />

              <TextField
                margin="dense"
                fullWidth
                label="City"
                variant="standard"
                size="small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <TextField
                margin="dense"
                fullWidth
                label="State"
                variant="standard"
                size="small"
                value={states}
                onChange={(e) => setState(e.target.value)}
              />

              <TextField
                margin="dense"
                fullWidth
                label="Country"
                variant="standard"
                size="small"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />

              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
