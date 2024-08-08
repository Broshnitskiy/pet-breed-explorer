import React from "react";
import BreedStats from "./BreedStats";

export interface IWeight {
  metric: string;
  imperial: string;
}

export interface IHeight {
  metric?: string;
  imperial?: string;
}

interface IBreedDetailsProps {
  petInfo: {
    name: string;
    bred_for?: string;
    breed_group?: string;
    life_span?: string;
    temperament?: string;
    weight?: IWeight;
    height?: IHeight;
  };
}

const BreedDetails: React.FC<IBreedDetailsProps> = ({ petInfo }) => (
  <section className="p-6">
    <h1 className="text-4xl text-center text-black font-bold mb-4">
      {petInfo.name}
    </h1>
    <p className="text-lg text-gray-700 mb-2">
      <span className="font-semibold">Bred For:</span>{" "}
      {petInfo?.bred_for || "-"}
    </p>
    <p className="text-lg text-gray-700 mb-2">
      <span className="font-semibold">Breed Group:</span>{" "}
      {petInfo?.breed_group || "-"}
    </p>
    <p className="text-lg text-gray-700 mb-2">
      <span className="font-semibold">Life Span:</span>{" "}
      {petInfo?.life_span || "-"}
    </p>
    <p className="text-lg text-gray-700 mb-4">
      <span className="font-semibold">Temperament:</span>{" "}
      {petInfo?.temperament || "-"}
    </p>

    <BreedStats weight={petInfo.weight} height={petInfo.height} />
  </section>
);

export default BreedDetails;
