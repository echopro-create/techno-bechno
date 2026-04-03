"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

type HoverLiftProps = MotionProps & {
  lift?: number;
};

type HoverScaleProps = PropsWithChildren<{
  className?: string;
  scale?: number;
}>;

const defaultViewport = {
  once: true,
  margin: "-100px",
};

const baseTransition = {
  duration: 0.8,
  ease: "easeOut" as const,
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function StaggerEnter({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...baseTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ ...baseTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
  delay = 0,
  lift = -4,
}: HoverLiftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ ...baseTransition, delay }}
      whileHover={{ y: lift }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverScale({
  children,
  className,
  scale = 1.05,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
