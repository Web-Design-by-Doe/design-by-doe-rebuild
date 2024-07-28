import Image from "next/image";

export default function ProcessStep({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  index: boolean;
}) {
  return (
    <li className="group relative flex lg:flex-col">
      {index && (
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-0.5 bg-primary/50 lg:right-0 lg:left-auto lg:top-[18px] lg:h-0.5 lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
      )}
      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-secondary/30 rounded-md p-2 transition-all duration-300 group-hover:bg-primary/50">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          className="group-hover:text-white"
        />
      </div>
      <div className="ml-6 lg:ml-0 lg:mt-10 ">
        <h3 className="text-xl font-medium before:mb-2 before:block before:font-mono before:text-smallest">
          {title}
        </h3>
        <h4 className="mt-2 text-base text-text/50">{description}</h4>
      </div>
    </li>
  );
}
