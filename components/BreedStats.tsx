import React from "react";
import { IHeight, IWeight } from "./BreedDetails";

interface IBreedStatsProps {
  weight?: IWeight;
  height?: IHeight;
}

const BreedStats: React.FC<IBreedStatsProps> = ({ weight, height }) => (
  <div className="flex flex-wrap gap-4">
    <div className="flex flex-col">
      <span className="font-semibold text-gray-700">Weight</span>
      <span className="text-gray-500">
        {weight?.metric} kg ({weight?.imperial} lbs)
      </span>
    </div>
    <div className="flex flex-col">
      <span className="font-semibold text-gray-700">Height</span>
      {height?.metric ? (
        <span className="text-gray-500">
          {height.metric} cm ({height.imperial} inches)
        </span>
      ) : (
        <span className="text-gray-500">---</span>
      )}
    </div>
  </div>
);

export default BreedStats;
