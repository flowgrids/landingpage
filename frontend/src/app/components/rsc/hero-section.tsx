import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute right-0 -z-10">
        <Image
          src="/flowgrids-bg.svg"
          alt="Background"
          className="w-auto h-full object-cover"
          width={1043}
          height={1001}
        />
      </div>
      <div className="relative min-h-full flex items-center bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-24 lg:py-64">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Using AI to power the <br />
              energy revolution
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Learn more
              </a>
              <a
                href="mailto:info@flowgrids.de"
                className="inline-block text-sm font-semibold text-gray-900 hover:underline"
              >
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
