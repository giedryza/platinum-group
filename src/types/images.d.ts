declare module '*.svg' {
  import { ReactType, SVGProps, ReactSVGElement } from 'react';

  export const ReactComponent: ReactType<SVGProps<ReactSVGElement>>;

  const src: string;
  export default src;
}
