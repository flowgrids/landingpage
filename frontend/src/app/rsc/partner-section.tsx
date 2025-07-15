import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoHTWG from "#/logo-htwg.svg";
import logoInvestBW from "#/logo-investbw.png";
import Image from "next/image";

const partners = [
  {
    name: "HTWG Konstanz",
    role: "Forschung und Entwicklung",
    href: "https://www.htwg-konstanz.de",
    logo: logoHTWG,
  },
  {
    name: "InvestBW",
    role: "InnovationsförderungTechnische Leitung",
    href: "https://invest-bw.de/",
    logo: logoInvestBW,
  },
];

export default function PartnerSection() {
  return (
    <div id="partner" className="relative w-full">
      <div className="absolute inset-0 bg-secondary -z-5"></div>

      <div className="flex justify-center">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Unsere Partner</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Wir danken den Förderträger deren Unterstützung unsere Arbeit
            ermöglichen.
          </p>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
        className="max-w-1/2 xl:max-w-lg mx-auto"
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="basis-full lg:basis-1/2">
              <a
                href={partner.href}
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="border-t">
                  <CardContent className="flex items-center justify-center p-6 aspect-16/9">
                    <Image
                      src={partner.logo}
                      width={1819}
                      height={614}
                      alt="logo of the partner"
                      className="filter dark:invert"
                    />
                  </CardContent>
                </Card>
                <div className="mt-2 text-center">
                  <span className="text-3xl font-semibold">{partner.name}</span>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="block lg:hidden" />
        <CarouselNext className="block lg:hidden" />
      </Carousel>
    </div>
  );
}
