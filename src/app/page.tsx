import Image from "next/image";
import Slider from "./components/Slider";
import Features from "./components/Featured";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <main>
      <Slider />
      <Features />
      <Offer />
    </main>
  );
}
