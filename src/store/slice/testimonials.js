import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTestimonial = createAsyncThunk(
  "testimonials/createTestimonial",
  async (newTestimonial, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token; //get the specific user token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:4000/testimonials",
        newTestimonial,
        config
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const testimonialSlice = createSlice({
  name: "testimonials",
  initialState: {
    testimonials: [],
    testimonial: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.testimonial = action.payload;
      })
      .addCase(createTestimonial.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// export const {} = userSlice.actions;

export default testimonialSlice.reducer;
