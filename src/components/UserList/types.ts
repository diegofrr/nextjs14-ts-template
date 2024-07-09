import type { LoadUserList } from './contracts';

export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserListProps = {
  loadUserList: LoadUserList;
};
