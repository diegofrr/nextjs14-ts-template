import type { LoadUserList } from '@/components/UserList/contracts';
import type { User } from '@/components/UserList/types';
import type { HttpClient } from '@/interfaces';

export function getUserList(httpClient: HttpClient<User[]>): LoadUserList {
  async function loadAll() {
    return await httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    });
  }
  return { loadAll };
}
