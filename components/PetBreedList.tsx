import React, { FC } from "react";
import { PetBreedCard } from "./PetBreedCard";
import { PetBreedWithType } from "@/types/PetBreedDto";

interface PetBreedListProps {
  breeds: PetBreedWithType[];
}

export const PetBreedList: FC<PetBreedListProps> = ({ breeds }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {breeds.map((breed) => (
        <PetBreedCard key={breed.name} breed={breed} />
      ))}
    </div>
  );
};
