import { HardDrive, PieChart, Shuffle } from "react-feather";

export const ProjectNavigation = () => {
  return (
    <div className="h-full w-80 bg-gray-50 border-r border-gray-200 px-8 py-8">
      <ul className="space-y-8">
        <li>
          <a href="#" className="text-gray-700 flex items-center opacity-60">
            <HardDrive size={16} />
            <p className="ml-4">Data sources</p>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 flex items-center opacity-60">
            <Shuffle size={16} />
            <p className="ml-4">Transformations</p>
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-700 flex items-center">
            <PieChart size={16} />
            <p className="ml-4">Reporting</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
