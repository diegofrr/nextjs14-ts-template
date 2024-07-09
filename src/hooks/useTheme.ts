'use client';

import { useTheme as useNextTheme } from 'next-themes';
import type { UseThemeProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

interface UseTheme extends UseThemeProps {
  toggleTheme: () => void;
  userTheme: string | undefined;
  anotherTheme: string | undefined;
}

export default function useTheme(): UseTheme {
  const { resolvedTheme, ...rest } = useNextTheme();

  const [userTheme, setUserTheme] = useState<string | undefined>();
  const [anotherTheme, setAnotherTheme] = useState<string>('');

  useEffect(() => {
    setUserTheme(resolvedTheme);
    setAnotherTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme]);

  const toggleTheme = () => {
    rest.setTheme(anotherTheme);
  };

  return {
    toggleTheme,
    userTheme,
    anotherTheme,
    ...rest,
  };
}
