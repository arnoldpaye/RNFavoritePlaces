const TOMTOM_API_KEY = process.env.TOMTOM_API_KEY;

export function getMapPreview(lat, lng) {
  return `https://api.tomtom.com/map/1/staticimage?key=${TOMTOM_API_KEY}&center=${lng},${lat}&zoom=14&width=400&height=200&format=png`;
}

export async function getAddress(lat, lng) {
  const response = await fetch(
    `https://api.tomtom.com/search/2/reverseGeocode/${lat},${lng}.json?key=${TOMTOM_API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  return data.result[0].freeformAddress;
}
