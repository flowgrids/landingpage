import Image from "next/image";

export default function LogoWithText({ size = 30 }: { size?: number }) {
  const ascentRatio = 0.8; // Ratio of the text ascent to the font size (font dependent)

  return (
    <div
      className="flex items-baseline gap-4"
      style={{
        marginTop: `${size / 3}px`,
        marginBottom: `${size / 3}px`,
        gap: `${size / 3}px`,
      }}
    >
      <Image
        src="/flowgrids-icon.svg"
        alt="Flowgrids logo"
        width={size}
        height={size}
      />
      <span
        className="font-semibold leading-none"
        style={{ fontSize: `${size / ascentRatio}px` }}
      >
        flowgrids
      </span>
    </div>
  );
}
