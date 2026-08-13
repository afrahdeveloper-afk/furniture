import Navbar from "@/components/Navbar";
import CollectionGrid from "@/components/CollectionGrid";
import Philosophy from "@/components/Philosophy";
import CollectionHeading from "@/components/CollectionHeading";
import Brands from "@/components/Brands";
import RevealImage from "@/components/RevealImage";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const brands = [
  "MARAZZI",
  "MUTINA",
  "ATLAS",
  "MOSAICO",
  "CERAMICHE",
  "LIVING",
];

export default function Home() {
  return (
    <main className="bg-[#f3f1ec] text-[#171717]">
      {/* NAVBAR */}
     
<Navbar />

{/* HERO */}
<section className="relative flex min-h-screen items-end overflow-hidden">
  {/* Background */}
  {/* Background */}
<div
  className="absolute inset-0 scale-[1.02] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90')",
  }}
/>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/25" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-12 md:pb-20">
    <div className="max-w-6xl">
    <p className="hero-subtitle mb-7 text-[10px] uppercase tracking-[0.4em] text-white/80">
       Ceramic surfaces · Architecture · Design
    </p>
      <h1 className="hero-title text-[clamp(4rem,10vw,10rem)] font-light leading-[0.78] tracking-[-0.065em] text-white">
  Surfaces
  <br />
  that define
  <br />
  spaces.
</h1>

      <div className="hero-button mt-12 flex items-center gap-5 text-[10px] uppercase tracking-[0.3em] text-white">
  <span className="h-px w-16 bg-white/70" />
  <span>Explore collection</span>
</div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/70 md:flex">
    <span>Scroll</span>
    <span className="h-12 w-px bg-white/50" />
  </div>
</section>

      {/* INTRO */}
      <Philosophy />

      {/* COLLECTIONS */}
      <section id="collections" className="px-6 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
         <CollectionHeading />

        <CollectionGrid />
        </div>
      </section>

      {/* BRANDS */}
     <Brands />

      {/* LARGE IMAGE */}
      <RevealImage />

      {/* PROJECTS */}
     <Projects />
      {/* FOOTER */}
      <Footer/>
    </main>
  );
}