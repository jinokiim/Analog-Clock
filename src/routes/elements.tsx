import { ElementType, lazy, Suspense } from 'react';

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);

export const HomePage = Loadable(lazy(() => import('pages/home/Home')));
