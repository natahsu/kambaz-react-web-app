import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export interface Assignment {
  _id?: string;
  courseId: string;
  title: string;
  description?: string;
  module: string;
  points: number;
  dueDate: string;
  availableDate: string;
  availableUntilDate?: string;
  status: "PUBLISHED" | "DRAFT";
}

export const getAssignmentsByCourse = async (courseId: string) => {
  const response = await axios.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/assignments`
  );
  return response.data;
};

export const createAssignment = async (assignment: Assignment) => {
  const response = await axios.post(
    `${REMOTE_SERVER}/api/courses/${assignment.courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const response = await axios.put(
    `${REMOTE_SERVER}/api/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(
    `${REMOTE_SERVER}/api/assignments/${assignmentId}`
  );
  return response.data;
};
