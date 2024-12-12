import { ListResponse } from "../general/general.types";

export interface User {
  id: string;
  name: string;
  password?: string;
  address: string;
  phoneNumber: string;
}

export type UserList = ListResponse<User>;