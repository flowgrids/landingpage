import HeroSection from "./rsc/hero-section";
import TeamSection from "./rsc/team-section";
import Image from "next/image";
import flowgridsBG from "#/flowgrids-bg.svg";
import PartnerSection from "./rsc/partner-section";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute -z-10 h-screen w-full">
        <Image
          src={flowgridsBG}
          alt="Background Pattern"
          className="object-cover md:object-contain md:object-right"
          fill
          sizes="100vw"
          priority={true}
        />
      </div>

      <div className="relative backdrop-blur-sm bg-white/20 dark:bg-black/20">
        <HeroSection />
        <TeamSection />
        <PartnerSection />
      </div>
    </div>
  );
}
