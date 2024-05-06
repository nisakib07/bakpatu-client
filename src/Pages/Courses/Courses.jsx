import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div className="mt-4 mr-4">
      {/* All Courses */}
      <div className="flex justify-between gap-4">
        <div className="w-3/4">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">All Courses</h1>
              <Link to="/bpbpadmin/addCourse">
                <button className="btn bg-black text-white hover:bg-black">
                  Add Course
                </button>
              </Link>
            </div>
          </div>
          <div>
            <CourseList></CourseList>
          </div>
        </div>

        {/* Categories */}
        <div className="w-1/4">
          <CategoryList></CategoryList>
        </div>
      </div>
    </div>
  );
};

export default Courses;
