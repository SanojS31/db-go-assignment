import ArticlesSection from "@/components/home/articlesSection";
import ComfortAdventureSection from "@/components/home/comfortAdventureSection";
import DestinationsSection from "@/components/home/destinationsSection";
import ExploreWorldsSection from "@/components/home/exploreWorldsSection";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero";
import SafariSearchSection from "@/components/home/safariSearchSection";
import UniqueArchitectureSection from "@/components/home/uniqueArchitectureSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExploreWorldsSection />
      <SafariSearchSection />
      <DestinationsSection />
      <ComfortAdventureSection />
      <UniqueArchitectureSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
}
