import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Get all assignments
export const getAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

// Get assignments by course ID
export const getAssignmentsByCourse = async (courseId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/course/${courseId}`);
  return response.data;
};

// Get one assignment by ID
export const getAssignment = async (assignmentId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

// Create a new assignment
export const createAssignment = async (assignment: any) => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

// Update an existing assignment
export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
