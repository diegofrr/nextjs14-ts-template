import { HttpResponse } from '@/interfaces';
import type { User } from './types';

export type LoadUserList = {
  loadAll(): Promise<HttpResponse<User[]>>;
};
