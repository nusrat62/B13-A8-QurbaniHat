import animals from "@/data/animals.json";
import topBreeds from "@/data/top-breeds.json";

// Enable static generation and revalidation
export const dynamic = "force-static";
export const revalidate = 300;

export async function GET() {
  return Response.json({ animals, topBreeds });
}
