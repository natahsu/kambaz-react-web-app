import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
const store = configureStore({
  reducer: {
    modules: modulesReducer,
    account: accountReducer,
    assignments: assignmentsReducer,
    courses: coursesReducer,
  },
});
export default store;