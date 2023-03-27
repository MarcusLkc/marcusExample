import { ArrowLeft } from "react-feather";

export const ProjectSubheader = () => {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 px-8 flex items-center">
      <div className="w-72 text-gray-400 flex items-center">
        <ArrowLeft size={24} />
        <p className="text-sm ml-4 font-bold">Back to choose project</p>
      </div>
      <div className="h-8 bg-gray-200 w-px mr-8"></div>
      <div className="flex-1">
        <h2 className="text-xl font-medium text-gray-700">My first notebook</h2>
      </div>
    </div>
  );
};
