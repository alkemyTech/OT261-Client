import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import userReducer from './slice/user';
import activitiesReducer from './slice/activities';
import testimonialsReducer from './slice/testimonials';
export default configureStore({
  reducer: {
    counter: counterReducer,
    activities: activitiesReducer,
    user: userReducer,
    testimonials:testimonialsReducer
  },
});



