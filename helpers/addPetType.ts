import { PetBreedDto, PetBreedWithType } from "@/types/PetBreedDto";
import { PetType } from "../types/petType";

export function addPetType(
  breeds: PetBreedDto[],
  type: PetType
): PetBreedWithType[] {
  return breeds.map((breed) => ({
    ...breed,
    type,
  }));
}
