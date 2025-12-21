export interface User {
  name: string;
  city: string;
  states: string;
  country: string;
  method?: string;
}

export interface DataState {
  users: User[];
  method?: string;
}

export interface UserList {
  data: {
    users: User[];
  };
}
