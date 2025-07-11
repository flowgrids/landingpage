import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Manuela Linke",
    role: "Projektleiterin",
    description: "Expertin für Projektmanagement und strategische Planung",
    image: "/manuela-linke.jpg",
  },
  {
    name: "Marcel Arpogaus",
    role: "Entwickler",
    description: "Spezialist für Backend-Entwicklung und Systemarchitektur",
    image: "/marcel-arpogaus.jpg",
  },
  {
    name: "Vincent Trötschel",
    role: "Fullstack-Entwickler",
    description: "Experte für moderne Web-Technologien und User Experience",
    image: "/vincent-troetschel.jpg",
  },
  {
    name: "Marc Strobel",
    role: "Betriebswirt",
    description:
      "Spezialist für Gründungen und Betriebswirtschaftliches Consulting.",
    image: "/vincent-troetschel.jpg",
  },
];

export default function TeamSection() {
  return (
    <div id="team" className="relative min-h-screen py-12 px-4%">
      <div className="absolute inset-0 bg-secondary mask-t-from-50 to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="mb-12 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Unser Team</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Lernen Sie die talentierten Menschen kennen, die hinter unserem
              Projekt stehen
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-popover relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[350px] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {member.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {member.role}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={member.image}
                    height="300"
                    width="300"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`Foto von ${member.name}`}
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-4 dark:text-neutral-300"
                >
                  {member.description}
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Profil →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Kontakt
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
