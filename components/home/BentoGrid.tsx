import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Mobile: 1 col, Tablet: 2 col, Desktop: 3 col
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 md:px-8 pb-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  colSpan = 1,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  colSpan?: 1 | 2 | 3;
}) => {
  // Map colSpan to Tailwind classes
  const spanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
  };

  // @ts-ignore
  const spanClass = spanClasses[colSpan] || spanClasses[1];

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-bg-secondary border border-border justify-between flex flex-col space-y-4",
        spanClass,
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        {title && (
          <div className="font-headline font-bold text-text-primary mb-2 mt-2 text-xl">
            {title}
          </div>
        )}
        {description && (
          <div className="font-body font-normal text-text-secondary text-sm leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};