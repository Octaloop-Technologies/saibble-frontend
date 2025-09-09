import PodcastHeroSection from "@/components/podcast/PodcastHeroSection";
import PodcastSeriesSection from "@/components/podcast/PodcastSeriesSection";
import GuestInvitationSection from "@/components/podcast/GuestInvitationSection";
import PodcastSpeakerBio from "@/components/podcast/PodcastSpeakerBio";
import PodcastFooterCTA from "@/components/podcast/PodcastFooterCTA";
import Footer from "@/components/Footer";

const Podcast = () => {
  return (
    <div className="min-h-screen bg-background">
      <PodcastHeroSection />
      <PodcastSeriesSection />
      <GuestInvitationSection />
      <PodcastSpeakerBio />
      <PodcastFooterCTA />
      <Footer />
    </div>
  );
};

export default Podcast;