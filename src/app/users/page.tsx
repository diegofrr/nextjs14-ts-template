'use client';

import type { LoadUserList } from '@/components/UserList/contracts';
import type { User } from '@/components/UserList/types';
import { UserList } from '@/components/UserList/user-list';

import { HttpClient } from '@/interfaces';
import HttpClientAdapter from '@/http/adapters';

export function getUserList(httpClient: HttpClient<User[]>): LoadUserList {
  async function loadAll() {
    return await httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    });
  }
  return { loadAll };
}

export default function Users() {
  return <UserList loadUserList={getUserList(HttpClientAdapter)} />;
}
