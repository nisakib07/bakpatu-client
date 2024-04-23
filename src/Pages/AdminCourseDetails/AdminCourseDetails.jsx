import { useParams } from "react-router-dom";
import ClassList from "./ClassList";
import TeachersList from "./TeachersList";

const AdminCourseDetails = () => {
  const { id } = useParams();

  return (
    <div className="mt-4 mr-4 flex justify-between">
      <div className="w-full mr-4 border-r-2 border-black pr-4">
        <h1 className="text-xl font-semibold">Web Development Bootcamp</h1>

        <iframe
          width="100%"
          height="450"
          className="rounded-t-xl mt-4"
          src="https://www.youtube.com/embed/3VcmZ3anN1I?si=ajky5jdA3ESNlRs2"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

        <div>
          <h2 className="text-xl font-bold my-3">Description</h2>
          <p>
            This comprehensive Web Development Bootcamp covers everything you
            need to know to become a proficient web developer. Starting from the
            basics of HTML, CSS, and JavaScript, you'll progress through
            advanced topics such as responsive design, front-end frameworks like
            React and Angular, back-end development with Node.js, databases, and
            deployment strategies. By the end of the bootcamp, you'll have the
            skills to build professional-quality websites and web applications.
          </p>
        </div>
      </div>

      <div className="w-[450px]">
        <ClassList id={id}></ClassList>
        <TeachersList id={id}></TeachersList>
      </div>
    </div>
  );
};

export default AdminCourseDetails;
