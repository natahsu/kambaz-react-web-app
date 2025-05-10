import { useParams } from "react-router";

export default function Quizzes({}: { courses: any[] }) {
  const { cid } = useParams();
  return <div>Quizzes for {cid}</div>;
}