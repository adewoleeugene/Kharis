import { Hero } from "@/components/home/hero";
import { ThisSunday } from "@/components/home/this-sunday";
import { Latest } from "@/components/home/latest";
import { KharisLifeSection } from "@/components/home/kharis-life";
import { Locations } from "@/components/home/locations";
import { BuildGodsHouse } from "@/components/home/build-gods-house";
import { Testimonies } from "@/components/home/testimonies";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThisSunday />
      <Latest />
      <KharisLifeSection />
      <Locations />
      <BuildGodsHouse />
      <Testimonies />
    </>
  );
}
