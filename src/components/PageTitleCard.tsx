export default function PageTitleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
