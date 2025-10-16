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
import logoAxel from "#/logo-axel.png";
import Image from "next/image";
import SectionLayout from "./section-layout";

const partners = [
  {
    name: "HTWG Konstanz",
    href: "https://www.htwg-konstanz.de",
    logo: logoHTWG,
  },
  {
    name: "InvestBW",
    href: "https://invest-bw.de/",
    logo: logoInvestBW,
  },
  {
    name: "Axel Accelerator",
    href: "https://www.axel.energy/de/index.php",
    logo: logoAxel,
  },
];

export default function PartnerSection() {
  return (
    <SectionLayout
      id="partner"
      title="Unsere Partner"
      text="Wir danken den Partnern deren Unterstützung unsere Arbeit ermöglichen."
    >
      <div className="absolute inset-0 bg-secondary -z-5"></div>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
        className="max-w-1/2 lg:max-w-1/2 xl:max-w-full mx-auto"
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="basis-full lg:basis-1/2 xl:basis-1/3"
            >
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
        <CarouselPrevious className="block xl:hidden" />
        <CarouselNext className="block xl:hidden" />
      </Carousel>
    </SectionLayout>
  );
}
