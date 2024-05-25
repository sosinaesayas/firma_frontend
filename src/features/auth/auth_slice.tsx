import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, signupApi } from './auth_api';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

interface SignupCredentials {
  email: string;
  password: string;
  phone: string;
  firstname: string;
  lastname: string;
  role: string;
}

export const signup = createAsyncThunk('auth/signup', async (credentials: SignupCredentials, { rejectWithValue }) => {
  try {
    const response = await signupApi(credentials);
    return response.data;
  } catch (error) {
    const errorMessage = (error as Error).message; 
    return rejectWithValue(errorMessage);
  }
});

export const login = createAsyncThunk('auth/login', async (credentials: { email: string; password: string }) => {
  const response = await loginApi(credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; 
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; 
      });
  },
});

export default authSlice.reducer;
