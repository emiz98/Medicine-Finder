import Header from "../../components/Header";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SuggestDrug from "../../components/user/SuggestDrug";
import { Link } from "react-router-dom";

const search = () => {
  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <Header />
      <main className="px-10 md:px-40 flex flex-col items-center mt-10 relative">
        <div className="flex items-center gap-x-2 w-full xl:w-1/2">
          <input
            className="border-2 border-primary px-5 rounded-lg py-2
              w-full outline-none"
            type="text"
            placeholder="Search drug"
          />
          <Link to="/search/drug">
            <MagnifyingGlassIcon
              className="w-12 p-2 rounded-lg border-2 border-primary fade
              text-primary object-contain hover:bg-primary hover:text-white cursor-pointer bg-white"
            />
          </Link>
        </div>
        <div className="w-full h-8 mt-20 bg-gradient-to-b from-gray-200 to-transparent absolute top-0 z-10" />
        <div className="mt-10 h-[62vh] overflow-y-scroll scrollbar-hide py-4">
          <SuggestDrug />
          <SuggestDrug />
          <SuggestDrug />
          <SuggestDrug />
          <SuggestDrug />
          <SuggestDrug />
          <SuggestDrug />
        </div>
        <div className="w-full h-8 mt-20 bg-gradient-to-b from-transparent to-gray-200 absolute bottom-0 z-10" />
      </main>
    </div>
  );
};

export default search;
