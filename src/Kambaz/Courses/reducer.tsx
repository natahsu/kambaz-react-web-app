import { v4 as uuidv4 } from "uuid";
import db from "../Database";
import { createReducer, createAction } from "@reduxjs/toolkit";

// Define the Course interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}

// Define the CourseState interface
interface CourseState {
  courses: Course[];
  course: Course;
}

// Define actions
export const addCourse = createAction("ADD_COURSE");
export const deleteCourse = createAction("DELETE_COURSE", (courseId: string) => ({ payload: courseId }));
export const updateCourse = createAction("UPDATE_COURSE");
export const setCourse = createAction("SET_COURSE", (course: Course) => ({ payload: course }));

// Define the initial state
const initialState: CourseState = {
  courses: db.courses,
  course: {
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  },
};

// Define the courseReducer using createReducer
export default createReducer(initialState, (builder) => {
  builder
    .addCase(addCourse, (state) => {
      state.courses = [...state.courses, { ...state.course, _id: uuidv4() }];
    })
    .addCase(deleteCourse, (state, action) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    })
    .addCase(updateCourse, (state) => {
      // This action seems to update the course in the courses array based on the state.course._id.
      // However, it might be better to update based on the action itself for clarity.
      state.courses = state.courses.map((c) => {
        if (c._id === state.course._id) {
          return state.course;
        } else {
          return c;
        }
      });
    })
    .addCase(setCourse, (state, action) => {
      state.course = action.payload;
    });
});
