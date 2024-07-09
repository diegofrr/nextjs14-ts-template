import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '@/interfaces/ReduxState';

const DEFAULT_USER_STATE: User = {
  name: '',
  email: '',
  id: 0,
};

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: '',
  error: false,
  verbose: '',
  user: DEFAULT_USER_STATE,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requestUserInfo: (state) => {
      state.isLoading = true;
      state.error = false;
      state.verbose = '';
    },

    successUserInfo: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = false;
      state.user = action.payload;
    },

    failureUserInfo: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = true;
      state.user = DEFAULT_USER_STATE;
      state.verbose = action.payload;
    },

    setUsername: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    },
    setTokenAuth: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

const actions = authSlice.actions;

export { actions };
export default authSlice.reducer;
