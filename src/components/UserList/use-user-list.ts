'use client';

import { useCallback, useEffect, useState } from 'react';
import type { User, UserListProps } from './types';

export const useUserList = ({
  loadUserList,
}: Pick<UserListProps, 'loadUserList'>) => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    const response = await loadUserList?.loadAll();
    setUsers(response?.body || []);
  }, [loadUserList]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users };
};
