
import { HTMLMotionProps, motion } from "framer-motion";
import React, { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
  x?: number;
  once?: boolean;
} & HTMLMotionProps<"div">;

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "", 
  y = 20, 
  x = 0, 
  once = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "", 
  once = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.7, 
  className = "", 
  once = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay,
        duration,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type StaggerContainerProps = {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
};

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
  once = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
} & HTMLMotionProps<"div">;

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  y = 20,
  x = 0,
  scale = 1,
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, x, scale: scale * 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const HoverScale: React.FC<FadeInProps> = ({ 
  children, 
  className = "", 
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const GradientText: React.FC<{ 
  text: string; 
  className?: string;
  gradient?: string;
}> = ({ 
  text, 
  className = "", 
  gradient = "from-sole-purple to-sole-electric-blue"
}) => {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {text}
    </span>
  );
};
