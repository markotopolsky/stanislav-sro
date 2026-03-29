import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import StorySection from "@/app/components/sections/StorySection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        {/* Products/Menu section */}
        {/* About section */}
        {/* Contact section */}
      </main>
      <Footer />
    </>
  );
}
