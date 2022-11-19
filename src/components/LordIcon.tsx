import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export type LordIconTrigger =
  | 'hover'
  | 'click'
  | 'loop'
  | 'loop-on-hover'
  | 'morph'
  | 'morph-two-way';

export type LordIconProps = {
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  trigger?: LordIconTrigger;
  colors?: string;
  delay?: number;
  size?: number;
};

export const LordIcon = ({
  colors,
  src,
  style,
  trigger,
  delay,
}: LordIconProps) => {
  return (
    <lord-icon
      colors={colors}
      src={src}
      trigger={trigger}
      delay={delay}
      style={style}
    />
  );
};