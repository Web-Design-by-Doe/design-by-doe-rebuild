export default function PageTitleCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`pb-20 max-w-2xl mx-auto text-center z-30 ${className}`}>
      <div className="flex flex-col items-center gap-9 pt-40 px-2">
        <div className="flex flex-col items-center">
          <h1 className="text-[56px] lg:text-header font-semibold text-text duration-300">
            {title}
          </h1>
          {subtitle && (
            <p className="text-text text-base font-normal max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
