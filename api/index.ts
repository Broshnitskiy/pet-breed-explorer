import { PetType } from "@/types/petType";

const CAT_API_KEY = process.env.NEXT_PUBLIC_CAT_API_KEY;
const DOG_API_KEY = process.env.NEXT_PUBLIC_DOG_API_KEY;
const BASE_URL_CAT = process.env.NEXT_PUBLIC_BASE_URL_CAT;
const BASE_URL_DOG = process.env.NEXT_PUBLIC_BASE_URL_DOG;

const getData = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export async function getCatsData() {
  return await getData(
    `${BASE_URL_CAT}/v1/breeds?api_key=${CAT_API_KEY}&&limit=6&page=0`
  );
}

export async function getDogsData() {
  return await getData(
    `${BASE_URL_DOG}/v1/breeds?api_key=${DOG_API_KEY}&&limit=6&page=0`
  );
}

export async function getPetInfoById(id: string, type: PetType) {
  if (type === "cat") {
    return await getData(
      `${BASE_URL_CAT}/v1/breeds/${id}?api_key=${CAT_API_KEY}`
    );
  }

  if (type === "dog") {
    return await getData(
      `${BASE_URL_DOG}/v1/breeds/${id}?api_key=${DOG_API_KEY}`
    );
  }
}

export async function getPetImages(id: string, type: PetType) {
  if (type === "cat") {
    return await getData(
      `${BASE_URL_CAT}/v1/images/search?breed_ids=${id}&&api_key=${CAT_API_KEY}&&limit=10`
    );
  }

  if (type === "dog") {
    return await getData(
      `${BASE_URL_DOG}/v1/images/search?breed_ids=${id}&&api_key=${DOG_API_KEY}&&limit=10`
    );
  }
}
