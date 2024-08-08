import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import { PetBreedWithType } from "@/types/PetBreedDto";

interface PetBreedCardProps {
  breed: PetBreedWithType;
}

export const PetBreedCard: FC<PetBreedCardProps> = ({ breed }) => {
  return (
    <Link href={`breed?type=${breed.type}&&id=${breed.id}`} className="block">
      <div className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl  hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          className="w-full h-48 object-cover"
          src={breed.image?.url || ""}
          alt={breed.name}
          width={800}
          height={400}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{breed.name}</div>
        </div>
      </div>
    </Link>
  );
};
