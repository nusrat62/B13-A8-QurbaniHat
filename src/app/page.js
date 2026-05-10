import FeaturedAnimals from "@/components/home/FeaturedAnimals";
import Hero from "@/components/home/Hero";
import QurbaniTips from "@/components/home/QurbaniTips";
import TopBreeds from "@/components/home/TopBreeds";

export const metadata = {
  title:
    "QurbaniHat - Premium Livestock for Eid-ul-Adha | Browse Cows, Goats & Sheep",
  description:
    "Find the perfect Qurbani animal for Eid-ul-Adha. Browse premium cows, goats, and sheep with verified quality, transparent pricing, and secure booking.",
};

// Enable ISR with 5-minute revalidation
export const revalidate = 300;

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />
    </>
  );
}
