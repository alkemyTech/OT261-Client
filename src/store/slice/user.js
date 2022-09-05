import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userUtils } from "../../utils/userUtils";

export const deleteUserAccount = createAsyncThunk(
  "user/deleteUserAccount",
  async (id, thunkAPI) => {
    try {
      await userUtils.logoutUser();
      return await userUtils.deleteUserAccount(id);
    } catch (error) {
      return error.message;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAdmin: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserAccount.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
