import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface CardProps extends MotionProps {
  heading: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
}

const Card = ({ 
  heading, 
  children, 
  className, 
  headingClassName,
  ...motionProps 
}: CardProps) => {
  return (
    <motion.div
      {...motionProps}
      className={cn(
        "group grow cursor-pointer hover:bg-card-background-hover transition-all duration-300 w-full h-full px-4 py-2 flex flex-col justify-between gap-2",
        className
      )}
    >
      <motion.h4 
        className={cn(
          "font-medium text-xl xs:text-2xl sm:text-3xl md:text-4xl capitalize group-hover:text-white group-hover:font-bold transition-all duration-300", 
          headingClassName
        )}
      >
        {heading}
      </motion.h4>
      <motion.div>{children}</motion.div>
    </motion.div>
  );
};

export default Card;