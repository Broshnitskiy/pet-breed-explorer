const CAT_API_KEY = process.env.CAT_API_KEY;
const DOG_API_KEY = process.env.DOG_API_KEY;
const BASE_URL_CAT = process.env.BASE_URL_CAT;
const BASE_URL_DOG = process.env.BASE_URL_DOG;

export async function getCatsData() {
  const res = await fetch(
    `${BASE_URL_CAT}/v1/breeds?api_key=${CAT_API_KEY}&&limit=6&page=0`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getDogsData() {
  const res = await fetch(
    `${BASE_URL_DOG}/v1/breeds?api_key=${DOG_API_KEY}&&limit=6&page=0`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
