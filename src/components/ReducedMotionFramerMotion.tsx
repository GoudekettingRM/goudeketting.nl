import { HTMLMotionProps, motion as Motion } from 'framer-motion';
import { forwardRef } from 'react';

const reducedMotionProps = (props: HTMLMotionProps<any>): HTMLMotionProps<any> => {
  return {
    ...props,
    animate: undefined,
    initial: undefined,
    transition: undefined,
    variants: undefined,
    whileDrag: undefined,
    whileFocus: undefined,
    whileHover: undefined,
    whileInView: undefined,
    whileTap: undefined
  };
};

const ReducedMotionDiv = forwardRef<HTMLDivElement>(
  function ReducedMotionDiv(props, ref): JSX.Element {
    return <Motion.div {...reducedMotionProps(props)} ref={ref} />;
  }
);
const ReducedMotionH1 = forwardRef<HTMLHeadingElement>(
  function ReducedMotionH1(props, ref): JSX.Element {
    return <Motion.h1 {...reducedMotionProps(props)} ref={ref} />;
  }
);
const ReducedMotionH2 = forwardRef<HTMLHeadingElement>(
  function ReducedMotionH2(props, ref): JSX.Element {
    return <Motion.h1 {...reducedMotionProps(props)} ref={ref} />;
  }
);
const ReducedMotionH3 = forwardRef<HTMLHeadingElement>(
  function ReducedMotionH3(props, ref): JSX.Element {
    return <Motion.h1 {...reducedMotionProps(props)} ref={ref} />;
  }
);

export const motion = new Proxy(Motion, {
  get: (target, key) => {
    if (key === 'div') {
      return ReducedMotionDiv;
    }
    if (key === 'h1') {
      return ReducedMotionH1;
    }
    if (key === 'h2') {
      return ReducedMotionH2;
    }
    if (key === 'h3') {
      return ReducedMotionH3;
    }

    // @ts-expect-error - This is a proxy, so we can't be sure what the key is.
    return target[key];
  }
});

export {
  AnimatePresence,
  type HTMLMotionProps,
  type MotionProps,
  type Spring,
  type TargetAndTransition,
  type Transition,
  type Variants
} from 'framer-motion';
