import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const API_URL = import.meta.env.VITE_API_URL;
export const fetchUsers = () => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(API_URL,"EST API URL")
  try {
    const response = await fetch(`${API_URL}/api/users`);
    const data = await response.json();
    dispatch(setUsers(data));
  } catch (error) {
    dispatch(setError("Failed to fetch users"));
  } finally {
    dispatch(setLoading(false));
  }
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
