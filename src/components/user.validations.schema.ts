import * as yup from "yup";

export const userSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters"),
  city: yup
    .string()
    .required("City is required")
    .min(3, "Minimum 3 characters"),
  states: yup
    .string()
    .required("State is required")
    .min(3, "Minimum 3 characters"),
  country: yup
    .string()
    .required("Country is required")
    .min(3, "Minimum 3 characters "),
});

export interface FormData {
  name: string;
  email: string;
  age: number;
}
