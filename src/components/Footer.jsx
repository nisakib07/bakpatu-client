import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <div className="bg-[#292929] text-white py-10">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">বাকপটু</h1>
            <p className="text-justify">
              বাকপটু একটি ই-লার্নিং প্লাটফর্ম। বাকপটু হাজির হয়েছে পড়াশোনার এক
              আনন্দময় জগৎ নিয়ে। বাকপটু কাজ করছে শিশুদের ব্রেইন আর স্কিল
              ডেভেলপমেন্ট নিয়ে। ফোর্থ ইন্ডাস্ট্রিয়াল রেভ্যুলেশনের চ্যালেঞ্জ
              মোকাবেলায় একঝাঁক দক্ষ জনগোষ্ঠী তৈরি করাই বাকপটুর লক্ষ্য। দরকার
              শুধু ইন্টারনেট সংযোগ, মোবাইল বা ল্যাপটপ।
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-6">এক্সপ্লোর</h1>

            <div className="flex flex-col space-y-4">
              <Link>আমাদের সম্পর্কে</Link>
              <Link>সেবা পাওয়ার শর্ত</Link>
              <Link>সাধারণ জিজ্ঞাসা</Link>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6">সহায়তা</h1>

            <div className="flex flex-col space-y-4">
              <Link>রিফান্ড এবং রিটার্ন নীতি</Link>
              <Link>গোপনীয়তা নীতি</Link>
              <Link>ব্লগ</Link>
              <Link>যোগাযোগ করুন</Link>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6">ডাউনলোড</h1>

            <div className="flex flex-col space-y-4">
              <Link>Playstore</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
