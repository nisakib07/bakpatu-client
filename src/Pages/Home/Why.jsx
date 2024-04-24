import { FaMapLocationDot } from "react-icons/fa6";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import WhyUsCard from "../../components/WhyUsCard";
import { MdOutlineMenuBook } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";

import { IoBookmark } from "react-icons/io5";

const Why = () => {
  return (
    <div className="mt-28 bg-[#532D80] py-20 text-white">
      <Heading title={"শিখতে পটু, জানতে পটু"}></Heading>
      <Wrapper>
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-justify">
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <div className="bg-[#C02139] w-20 h-16 flex items-center justify-center text-2xl text-white rounded-t-badge">
              <FaMapLocationDot></FaMapLocationDot>
            </div>

            <WhyUsCard
              title={"ব্যবহার করি সহজেই"}
              description={
                "একদম ইউজার ফ্রেন্ডলি হওয়ায় যে কেউ যখন তখন যে কোনো জায়গা থেকে ইউজ করতে পারবে।"
              }></WhyUsCard>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <div className="bg-[#c19833] w-20 h-16 flex items-center justify-center text-2xl text-white rounded-t-badge">
              <MdOutlineMenuBook></MdOutlineMenuBook>
            </div>
            <WhyUsCard
              title={"কার্যকর শিক্ষা উপকরণ"}
              description={
                "লাইভ ও রেকর্ডেড ক্লাস, স্মার্ট নোট, ছবি, ভিডিও, ফ্লাশকার্ড, কুইজ, সহজ সব টেকনিক ও শর্টকাট আর রিয়েল লাইফ এক্সামপলের মাধ্যমে শেখা হবে আনন্দময় ও কার্যকর।"
              }></WhyUsCard>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <div className="bg-[#0A5E95] w-20 h-16 flex items-center justify-center text-2xl text-white rounded-t-badge">
              <SiFrontendmentor></SiFrontendmentor>
            </div>{" "}
            <WhyUsCard
              title={"স্বয়ংক্রিয় মেন্টরিং"}
              description={
                "যেকোনো প্রবলেমের সল্যুশনে আছে দেশসেরা এক্সপার্ট টিচার্স প্যানেল। রয়েছে ওরাল টেস্ট, মান্থলি এক্সাম, মক টেস্ট, গ্রুমিং ক্লাস, গার্ডিয়ান ফিড ব্যাক, ওয়ান টু ওয়ান মনিটরিং এবং ইনডিভিজুয়াল বেস্ট মেথড এপ্লায়িং সিস্টেম।"
              }></WhyUsCard>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <div className="bg-[#F27321] w-20 h-16 flex items-center justify-center text-2xl text-white rounded-t-badge">
              <IoBookmark></IoBookmark>
            </div>{" "}
            <WhyUsCard
              title={"মেধা মূল্যায়ন ও সনদ"}
              description={
                "রয়েছে স্বয়ংক্রিয়ভাবে মেধা মূল্যায়ন ব্যবস্থা, সার্টিফিকেট ও বেস্ট লার্নার এওয়ার্ড।"
              }></WhyUsCard>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Why;
