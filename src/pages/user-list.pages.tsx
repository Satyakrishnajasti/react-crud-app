import { useDispatch, useSelector } from "react-redux";
import UserListComponent from "../components/users-list.component";
import type { User, UserList } from "../shared/model";
import { deleteUser } from "../store/data-slice";

export default function UserListPage() {
  const data = useSelector((state: UserList) => state.data);

  const dispatch = useDispatch();
  const deleteMethod = (user: User) => {
    dispatch(deleteUser({ ...user }));
  };

  return (
    <>
      <UserListComponent users={data.users} deleteUser={deleteMethod} />
    </>
  );
}
