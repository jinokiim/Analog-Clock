import React, { cloneElement, ElementType, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import * as Sentry from '@sentry/react';

import { AnimatePresence } from 'framer-motion';
import { HomePage } from './elements';

// -------------------------------------------------------------------
export const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);

function Router() {
  const elements = useRoutes([
    {
      path: '/',
      element: <HomePage />
    }
  ]);

  if (!elements) return null;

  const clone = cloneElement(elements, { key: elements.props.children.key });

  return (
    // @ts-ignore
    <AnimatePresence mode="wait" onExitComplete={() => console.log('exit complete')}>
      {clone}
    </AnimatePresence>
  );
}

const sentryRouter = Sentry.withSentryReactRouterV6Routing(Router);
export default sentryRouter;
