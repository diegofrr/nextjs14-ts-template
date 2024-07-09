export type Env = {
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_HTTP_CLIENT: string;
  PORT: number;
};

export const env: Env = {
  NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  NEXT_PUBLIC_HTTP_CLIENT: process.env.NEXT_PUBLIC_HTTP_CLIENT || 'axios',
  PORT: Number(process.env.PORT) || 3000,
};
