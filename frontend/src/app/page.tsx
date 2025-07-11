import HeroSection from "./rsc/hero-section";
import TeamSection from "./rsc/team-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 -z-10">
        <Image
          src="/flowgrids-bg.svg"
          alt="Background"
          className="w-auto h-full object-cover"
          width={1043}
          height={1001}
        />
      </div>

      <div className="relative backdrop-blur-sm bg-white/20 dark:bg-black/20">
        <HeroSection />
        <TeamSection />
      </div>
    </div>
  );
}
