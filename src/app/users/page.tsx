'use client';

import type { LoadUserList } from '@/components/user-list/contracts';
import type { User } from '@/components/user-list/types';
import { UserList } from '@/components/user-list/user-list';

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
