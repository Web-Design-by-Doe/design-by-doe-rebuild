export default function SectionTitleCard({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col max-w-2xl items-center">
      <h2>{title}</h2>
      <p className="text-base text-center">{description}</p>
    </div>
  );
}
