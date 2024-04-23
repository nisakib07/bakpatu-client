import AllCourses from "../AllCourses";
import Banner from "../Banner";
import Navbar from "../Navbar";
import Reviews from "../Reviews";
import Why from "../Why";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AllCourses></AllCourses>
      <Why></Why>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
