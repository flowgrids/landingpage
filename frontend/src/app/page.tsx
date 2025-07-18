import HeroSection from "./rsc/hero-section";
import TeamSection from "./rsc/team-section";
import flowgridsBG from "#/flowgrids-bg.svg";
import PartnerSection from "./rsc/partner-section";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className={`absolute -z-10 h-screen w-full bg-no-repeat bg-cover bg-top md:bg-contain md:bg-right`}
        style={{ backgroundImage: `url(${flowgridsBG.src})` }}
      ></div>

      <div className="relative backdrop-blur-sm bg-white/20 dark:bg-black/20">
        <HeroSection />
        <TeamSection />
        <PartnerSection />
      </div>
    </div>
  );
}
