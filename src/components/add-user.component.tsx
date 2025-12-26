import TextField from "@mui/material/TextField";
// import { useState } from "react";
import type { User } from "../shared/model";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "./add-user.module.css";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./user.validations.schema";

type NewFormProps = {
  onSubmitForm: (data: User) => void;
};

export default function NewForm({ onSubmitForm }: NewFormProps) {
  const { state } = useLocation();
  // const [name, setName] = useState(state?.user.name);
  // const [city, setCity] = useState(state?.user.city);
  // const [states, setState] = useState(state?.user.states);
  // const [country, setCountry] = useState(state?.user.country);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: yupResolver(userSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      name: state?.user.name,
      city: state?.user.city,
      states: state?.user.states,
      country: state?.user.country,
    },
  });

  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log("42", data);
    const { name, city, states, country } = data;
    const method = state?.method;
    onSubmitForm({
      name,
      city,
      states,
      country,
      method,
    });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const method = state?.method;
  //   onSubmitForm({
  //     name,
  //     city,
  //     states,
  //     country,
  //     method,
  //   });
  // };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="dense"
                fullWidth
                label="Name"
                variant="standard"
                size="small"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                disabled={state?.method === "Update"}
              />

              <TextField
                margin="dense"
                fullWidth
                label="City"
                variant="standard"
                size="small"
                {...register("city")}
                error={!!errors.city}
                helperText={errors.city?.message}
              />

              <TextField
                margin="dense"
                fullWidth
                label="State"
                variant="standard"
                size="small"
                {...register("states")}
                error={!!errors.states}
                helperText={errors.states?.message}
              />

              <TextField
                margin="dense"
                fullWidth
                label="Country"
                variant="standard"
                size="small"
                {...register("country")}
                error={!!errors.country}
                helperText={errors.country?.message}
              />

              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ marginTop: "20px" }}
                  disabled={!isValid}
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
