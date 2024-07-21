import SectionTitleCard from "./SectionTitleCard";

export default function SectionContainer({
  children,
  className,
  title,
  description,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section
      className={`flex w-full flex-col max-w-[1170px] m-auto ${className}`}
    >
      <SectionTitleCard title={title} description={description} />
      {children}
    </section>
  );
}
