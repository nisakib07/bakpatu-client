import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import axios from "axios";
import Wrapper from "../../components/Wrapper";

const WorkProcedure = () => {
  const { data: procedures = [], isFetching } = useQuery({
    queryKey: ["Procedure"],
    queryFn: async () => {
      const res = await axios.get("./workprocedure.json");
      return res?.data;
    },
  });
  return (
    <div className="mt-28">
      <Heading title={"কিভাবে বাকপটু কাজ করে"}></Heading>

      <Wrapper>
        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-7 ">
          {procedures?.map((procedure) => (
            <div
              key={procedure?.id}
              className="bg-hoverBG px-5 py-4 rounded-lg hover:cursor-pointer hover:-translate-y-3 transition-all duration-300">
              <div className="text-2xl font-semibold mb-5">
                <h1
                  className={`${
                    procedure?.id === 1
                      ? "text-[#D0202F]"
                      : `${
                          procedure?.id === 2 ? "text-[#532D80]" : "text-first"
                        }`
                  }`}>
                  {procedure?.heading}
                </h1>
              </div>
              <p>{procedure?.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkProcedure;
