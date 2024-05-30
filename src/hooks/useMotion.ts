'use client';
import { motion as ReducedMotion } from '@/components/ReducedMotionFramerMotion';
import { motion as Motion, useReducedMotion } from 'framer-motion';

export const useMotion = () => {
  const reduceMotion = useReducedMotion();

  return {
    motion: reduceMotion ? ReducedMotion : Motion,
    reduced: reduceMotion
  };
};
