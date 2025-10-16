import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import MarcelCropBW from "#/marcel-crop-bw.jpg";
import MarcCropBW from "#/marc-crop-bw.jpg";
import VinceCropBW from "#/vince-crop-bw.jpg";
import SectionLayout from "./section-layout";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Marcel Arpogaus",
    role: "Technische Leitung",
    description: "#ALGORITHMS #AI #FORECASTING",
    image: MarcelCropBW,
    linkedin: "https://www.linkedin.com/in/marpogaus/",
  },
  {
    name: "Vincent Trötschel",
    role: "Produktentwicklung",
    description: "#CODING #SOFTWARE #ARCHITECTURE",
    image: VinceCropBW,
    linkedin: "https://www.linkedin.com/in/vincent-t-766a3a370/",
  },
  {
    name: "Marc Strobel",
    role: "Kaufmännische Leitung",
    description: "#BUSINESS #SALES #NETWORKING",
    image: MarcCropBW,
    linkedin: "https://de.linkedin.com/in/marc-strobel-asr-fahrsimulation",
  },
];

export default function TeamSection() {
  return (
    <SectionLayout
      id="team-section"
      title="Unser Team"
      text="Lernen Sie die talentierten Menschen kennen, die hinter unserem Projekt stehen."
    >
      <div className="absolute inset-0 bg-secondary mask-t-from-50 to-transparent z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-64">
        {teamMembers.map((member, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-popover relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-800 dark:text-white"
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
              <CardItem translateZ="100" className="w-full mt-4 relative">
                <Image
                  src={member.image}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl aspect-300/240"
                  alt={`Foto von ${member.name}`}
                />
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-white dark:bg-neutral-800 rounded-full p-2 shadow-md hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </CardItem>
              <CardItem
                as="div"
                translateZ="60"
                className="flex justify-between items-center mt-4 text-sm"
              >
                {member.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionLayout>
  );
}
