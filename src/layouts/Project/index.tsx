import { ProjectContent } from "./ProjectContent";
import { ProjectNavigation } from "./ProjectNavigation";
import { ProjectSubheader } from "./ProjectSubheader";

export const Project = () => {
  return (
    <>
      <ProjectSubheader />

      <div className="flex-1 bg-green-300 flex flex-row">
        <ProjectNavigation />
        <ProjectContent />
      </div>
    </>
  );
};
