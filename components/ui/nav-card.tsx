import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  heading: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
}

const Card = ({ heading, children, className, headingClassName }: CardProps) => {
  return (
    <div
      className={cn(
        "group grow cursor-pointer hover:bg-card-background-hover transition-all duration-300 w-full h-full px-3 py-1.5 flex flex-col justify-between gap-2",
        className
      )}
    >
        <h4 className={cn(
            "font-medium text-xl capitalize group-hover:text-white group-hover:font-bold transition-all duration-300", 
            headingClassName
        )}>
            {heading}
        </h4>
        <div>{children}</div>
    </div>
  );
};

export default Card;

