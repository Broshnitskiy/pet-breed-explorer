import { getCatsData, getDogsData } from "@/api";
import { Container } from "@/components/Container";
import { PetBreedList } from "@/components/PetBreedList";
import { addPetType } from "@/helpers/addPetType";
import { shuffleArray } from "@/helpers/shuffleArray";

export default async function Home() {
  const catBreeds = await getCatsData();
  const dogBreeds = await getDogsData();

  const catBreedsWithProperty = addPetType(catBreeds, "cat");
  const dogBreedsWithProperty = addPetType(dogBreeds, "dog");

  const mixedBreeds = shuffleArray([
    ...catBreedsWithProperty,
    ...dogBreedsWithProperty,
  ]);

  return (
    <main className=" min-h-screen ">
      <Container>
        <div className="min-h-screen  pt-8 pb-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Pet Breeds (Cats and Dogs)
          </h1>

          <PetBreedList breeds={mixedBreeds} />
        </div>
      </Container>
    </main>
  );
}
