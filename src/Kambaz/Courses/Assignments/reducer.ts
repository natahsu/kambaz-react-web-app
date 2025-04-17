import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAssignmentsByCourse,
  createAssignment as apiCreateAssignment,
  updateAssignment as apiUpdateAssignment,
  deleteAssignment as apiDeleteAssignment,
} from "./client";

interface AssignmentState {
  assignments: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AssignmentState = {
  assignments: [],
  status: "idle",
  error: null,
};

export const fetchAssignments = createAsyncThunk(
  "assignments/fetchAssignments",
  async (courseId: string) => {
    return await getAssignmentsByCourse(courseId);
  }
);

export const addAssignment = createAsyncThunk(
  "assignments/addAssignment",
  async (assignment: any) => {
    return await apiCreateAssignment(assignment);
  }
);

export const updateAssignment = createAsyncThunk(
  "assignments/updateAssignment",
  async (assignment: any) => {
    return await apiUpdateAssignment(assignment);
  }
);

export const deleteAssignment = createAsyncThunk(
  "assignments/deleteAssignment",
  async (assignmentId: string) => {
    await apiDeleteAssignment(assignmentId);
    return assignmentId;
  }
);

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssignments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assignments = action.payload;
      })
      .addCase(addAssignment.fulfilled, (state, action) => {
        state.assignments.push(action.payload);
      })
      .addCase(updateAssignment.fulfilled, (state, action) => {
        const index = state.assignments.findIndex(
          (a) => a._id === action.payload._id
        );
        if (index !== -1) {
          state.assignments[index] = action.payload;
        }
      })
      .addCase(deleteAssignment.fulfilled, (state, action) => {
        state.assignments = state.assignments.filter(
          (a) => a._id !== action.payload
        );
      });
  },
});

export default assignmentsSlice.reducer;
