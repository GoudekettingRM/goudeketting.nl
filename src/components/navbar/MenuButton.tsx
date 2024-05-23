import { SVGMotionProps, Transition, motion } from 'framer-motion';
import { useMemo } from 'react';

interface Props extends SVGMotionProps<any> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = '#fff',
  transition = undefined,
  lineProps = null,
  ...props
}: Props) => {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  };
  const lineProppies = useMemo(() => {
    return {
      stroke: color,
      strokeWidth: strokeWidth as number,
      vectorEffect: 'non-scaling-stroke',
      initial: 'closed',
      animate: isOpen ? 'opened' : 'closed',
      transition,
      ...lineProps
    };
  }, [color, isOpen, lineProps, strokeWidth, transition]);
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow='visible'
      preserveAspectRatio='none'
      width={width}
      height={height}
      className={`${isOpen ? 'my-0.5' : 'my-0'} cursor-pointer`}
      {...props}
    >
      <motion.line x1='0' x2={unitWidth} y1='0' y2='0' variants={top} {...lineProppies} />
      <motion.line x1='0' x2={unitWidth} y1='2' y2='2' variants={center} {...lineProppies} />
      <motion.line x1='0' x2={unitWidth} y1='4' y2='4' variants={bottom} {...lineProppies} />
    </motion.svg>
  );
};

export { MenuButton };
