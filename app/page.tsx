import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedMeme from "@/components/sections/FeaturedMeme";
import MemeGallery from "@/components/sections/MemeGallery";
import StatusBoard from "@/components/sections/StatusBoard";
import HowToBuy from "@/components/sections/HowToBuy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMeme />
        <MemeGallery />
        <StatusBoard />
        <HowToBuy />
      </main>
      <Footer />
    </>
  );
}
