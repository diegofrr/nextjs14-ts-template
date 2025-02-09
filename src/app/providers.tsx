'use client';

import StoreProvider from '@/store/store-provider';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster duration={2000} />
          {children}
        </NextThemesProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
