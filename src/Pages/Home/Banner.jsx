import Wrapper from "../../components/Wrapper";

const Banner = () => {
  return (
    <Wrapper>
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center mt-8 mb-28">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-start">
            <span className="text-first">শেখা </span>আর{" "}
            <span className="text-first">মজা,</span> সব পাওয়া এখন সহজ!
          </h1>

          <p className="text-justify mt-10 px-4 md:px-0">
            বাংলাদেশের অন্যতম সেরা ই-লার্নিং প্লাটফর্ম, কাজ করছে শিশুদের গাণিতিক
            দক্ষতা, মানসিক দক্ষতা, প্রযুক্তিগত দক্ষতা ও ভাষাগত দক্ষতা বৃদ্ধি
            করতে। আনন্দের ছলে মানসম্মত শিক্ষা নিশ্চিত করাই আমাদের লক্ষ্য।
          </p>
        </div>
        <div className="md:w-1/2 px-4 md:px-0">
          <div className="rounded-lg mx-auto">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://i.ibb.co/Jrq37Pq/homebanner.jpg"
              alt=""
            />
          </div>
        </div>{" "}
      </div>
    </Wrapper>
  );
};

export default Banner;
