import { getPetImages, getPetInfoById } from "@/api";
import BreedDetails from "@/components/BreedDetails";
import ImageGallery from "@/components/ImageGallery";
import { PetType } from "@/types/petType";

interface IBreedProps {
  searchParams: { type: PetType; id: string };
}

export default async function Breed({ searchParams }: IBreedProps) {
  const { type, id } = searchParams;
  const petInfo = await getPetInfoById(id, type);
  const imageList = await getPetImages(id, type);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <BreedDetails petInfo={petInfo} />
        <ImageGallery images={imageList} altText={petInfo.name} />
      </div>
    </main>
  );
}
