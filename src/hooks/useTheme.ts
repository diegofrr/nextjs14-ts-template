'use client';

import { useTheme as useNextTheme } from 'next-themes';
import type { UseThemeProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

type UseTheme = UseThemeProps & {
  toggleTheme: () => void;
  userTheme: string | undefined;
  anotherTheme: string | undefined;
};

export default function useTheme(): UseTheme {
  const { resolvedTheme, ...rest } = useNextTheme();

  const [userTheme, setUserTheme] = useState<string | undefined>();
  const [anotherTheme, setAnotherTheme] = useState<string>('');

  useEffect(() => {
    setUserTheme(resolvedTheme);
    setAnotherTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    updateViewportColor();
  }, [resolvedTheme]);

  const toggleTheme = () => {
    rest.setTheme(anotherTheme);
  };

  const updateViewportColor = () => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', getHexColorBasedOnTheme(resolvedTheme));
    } else {
      const _meta = document.createElement('meta');
      _meta.setAttribute('name', 'theme-color');
      _meta.setAttribute('content', getHexColorBasedOnTheme(resolvedTheme));
      document.head.appendChild(_meta);
    }
  };

  const getHexColorBasedOnTheme = (theme: string | undefined) => {
    return theme === 'dark' ? '#000' : '#fff';
  };

  return {
    toggleTheme,
    userTheme,
    anotherTheme,
    ...rest,
  };
}
