import { useSelector } from "react-redux";
export default function ProtectedStudent({
  facultyAccess,
  children,
}: {
  facultyAccess: any;
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.account);
  if (currentUser.role == "STUDENT") {
    return children;
  } else {
    return facultyAccess;
  }
}