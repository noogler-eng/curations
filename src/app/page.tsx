import About from "@/components/About";
import Hero from "@/components/Hero";
import HeroList from "@/components/Herolist";
import Navbar from "@/components/Navbar";
import Recos from "@/components/recos";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50 px-8 py-4">
        <Navbar />
      </div>
      <div>
        <Hero />
        <div className="mt-25">
          <Recos />
          <HeroList />
          <About />
        </div>
      </div>
    </div>
  );
}
