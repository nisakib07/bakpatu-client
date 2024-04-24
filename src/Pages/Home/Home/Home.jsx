import AllCourses from "../AllCourses";
import Banner from "../Banner";
import Media from "../Media";
import Navbar from "../Navbar";
import Reviews from "../Reviews";
import Why from "../Why";
import WorkProcedure from "../WorkProcedure";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AllCourses></AllCourses>
      <Why></Why>
      <Reviews></Reviews>
      <WorkProcedure></WorkProcedure>
      <Media></Media>
    </div>
  );
};

export default Home;
