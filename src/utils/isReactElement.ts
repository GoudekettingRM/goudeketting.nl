import { ReactNode, isValidElement } from 'react';

export function isReactElement(child: ReactNode): child is React.ReactElement {
  return isValidElement(child);
}
