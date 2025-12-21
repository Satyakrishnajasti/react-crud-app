import { useDispatch } from "react-redux";
import NewForm from "../components/add-user.component";
import { addUser, updateUser } from "../store/data-slice";
import type { User } from "../shared/model";
import { useNavigate } from "react-router-dom";

export default function NewFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data: User) => {
    const valid = !!(data.city || data.country || data.name || data.states);
    if (!valid) return;

    if (data.method !== "Update") {
      dispatch(addUser([{ ...data }]));
    } else {
      dispatch(updateUser({ ...data }));
    }

    navigate("/");
  };
  return <NewForm onSubmitForm={handleFormSubmit} />;
}
