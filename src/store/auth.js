import { createSlice } from "@reduxjs/toolkit";

//*initial state for authentication

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//*expporting actions which named by redux toolkit by itself.
export const authActions = authSlice.actions;

export default authSlice;
