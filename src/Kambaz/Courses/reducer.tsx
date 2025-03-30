import { v4 as uuidv4 } from "uuid";
import { createReducer, createAction } from "@reduxjs/toolkit";

interface Course {
  _id: string;
  name: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  description?: string;
}

interface CourseState {
  courses: Course[];
  course: Course;
}

export const addCourse = createAction("ADD_COURSE");
export const deleteCourse = createAction<string>("DELETE_COURSE");
export const updateCourse = createAction("UPDATE_COURSE");
export const setCourse = createAction<Course>("SET_COURSE");

const initialState: CourseState = {
  courses: [],
  course: {
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  },
};

const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCourse, (state) => {
      state.courses.push({ ...state.course, _id: uuidv4() });
    })
    .addCase(deleteCourse, (state, action) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    })
    .addCase(updateCourse, (state) => {
      state.courses = state.courses.map((c) =>
        c._id === state.course._id ? { ...state.course } : c
      );
    })
    .addCase(setCourse, (state, action) => {
      state.course = action.payload;
    });
});

export default courseReducer;
