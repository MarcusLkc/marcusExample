import { useMeasure } from "react-use";
import { Chart } from "./Chart";

export const ProjectContent = () => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full flex-1 flex flex-col bg-gray-100">
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <Chart height={height * 0.8} width={width * 0.8} />
      </div>

      <div className="w-full h-20 bg-gray-50 border-t border-gray-200 px-8 py-4">
        <div className="w-full h-full rounded-full border border-gray-200 flex items-center px-4">
          <p className="text-gray-400 text-sm">Ask our Ai to produce a different visualization....</p>
        </div>
      </div>
    </div>
  );
};
