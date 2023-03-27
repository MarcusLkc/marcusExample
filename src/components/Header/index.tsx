import { faker } from "@faker-js/faker";
import { useMemo } from "react";
import { Bell, ChevronDown, Mail } from "react-feather";

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

export const Header = () => {
  const fullName = useMemo(() => faker.name.fullName(), []);
  const email = useMemo(() => faker.internet.email(), []);

  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 px-8 flex items-center">
      <div className="h-12 w-12 rounded-full bg-blue-300"></div>

      <div className="flex-1 px-8 flex items-center justify-between">
        <div className="h-10 w-[640px] border border-gray-200 rounded flex items-center px-4">
          <p className="text-sm text-gray-400">Search...</p>
        </div>
        <div className="flex space-x-4 text-gray-500">
          <Mail size={16} />
          <Bell size={16} />
        </div>
      </div>

      <div className="h-12 bg-gray-200 w-px mx-4"></div>
      <div className="h-12 w-12 rounded-full bg-green-300"></div>
      <div className="mx-4">
        <p className="text-sm text-gray-700 font-medium">{fullName}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
      <button className="focus:outline-none h-12 w-12 flex items-center justify-center text-gray-500">
        <ChevronDown size={16} />
      </button>
    </div>
  );
};
