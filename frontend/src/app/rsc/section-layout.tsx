interface SectionLayoutProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  text: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  title,
  text,
  children,
  ...rest
}: Readonly<SectionLayoutProps>) {
  return (
    <section {...rest}>
      <div id="team" className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="mb-12 max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl xl:max-w-4xl mx-auto">
                {text}
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
