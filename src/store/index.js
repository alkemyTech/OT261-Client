import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter";
import testimonialsReducer from "./slice/testimonials";
import userReducer from "./slice/user";
import activitiesReducer from "./slice/activities";

export default configureStore({
  reducer: {
    counter: counterReducer,
    activities: activitiesReducer,
    testimonials: testimonialsReducer,
    user: userReducer,
  },
});
