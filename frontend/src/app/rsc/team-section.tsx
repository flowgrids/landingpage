import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Manuela Linke",
    role: "Forschung und Entwicklung",
    description: "#ENERGY #AI #GRID-CONTROL",
    image: "/manu-bw.jpg",
  },
  {
    name: "Marcel Arpogaus",
    role: "Technische Leitung",
    description: "#ALGORITHMS #AI #FORECASTING",
    image: "/marcel-crop-bw.jpg",
  },
  {
    name: "Vincent Trötschel",
    role: "Produktentwicklung",
    description: "#CODING #SOFTWARE #ARCHITECTURE",
    image: "/vince-crop-bw.jpg",
  },
  {
    name: "Marc Strobel",
    role: "Kaufmännische Leitung",
    description:
      "#BUSINESS #SALES #NETWORKING",
    image: "/marc-crop-bw.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-y-8 2xl:gap-x-64">
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
                  className="text-primary text-sm max-w-sm mt-4 dark:text-neutral-300"
                >
                  {member.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
