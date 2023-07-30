import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar";
import "./styles.css";
import useTeacherDetail from "../../hooks/useTeacherDetail";
import Teacher from "../../types/Teacher";

type Props = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: Props) => {
  const navigate = useNavigate();
  const { handleInsertTeacher } = useTeacherDetail();

  function handleTeacherDetail() {
    handleInsertTeacher(teacher);
    navigate("/teacher-detail");
  }
  return (
    <div className="teacher-card" onClick={handleTeacherDetail}>
      <Avatar image={teacher.avatar} />
      <h1>{teacher.name}</h1>
    </div>
  );
};

export default TeacherCard;
