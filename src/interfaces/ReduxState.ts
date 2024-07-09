export interface User {
  name: string;
  email: string;
  id: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string;
  error: boolean;
  verbose?: string;
  user: User;
}

export interface ReduxState {
  authReducer: AuthState;
}
