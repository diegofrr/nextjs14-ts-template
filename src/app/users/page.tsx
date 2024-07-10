'use client';

import { UserList } from '@/components/UserList/user-list';
import HttpClientAdapter from '@/http/adapters';
import { getUserList } from './getUserList';

export default function Users() {
  return <UserList loadUserList={getUserList(HttpClientAdapter)} />;
}
