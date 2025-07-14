import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-24 lg:py-64">
          <div className="max-w-2xl pb-50">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Using AI to power the <br />
              energy revolution
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Intelligente Betriebsführung von Verteilnetzen
              zur Beschleunigung der Energiewende.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <Button asChild>
                <Link href="#team">Meet the Team</Link>
              </Button>
              <a
                href="mailto:info@flowgrids.de"
                className="inline-block text-sm font-semibold hover:underline"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
