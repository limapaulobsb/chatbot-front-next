import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { extractRouterConfig } from 'uploadthing/server';

import { getSession } from './actions';
import { ourFileRouter } from './api/uploadthing/core';
import StyledComponentsRegistry from './registry';
import { MainProvider } from '@/context';

// import '@uploadthing/react/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <MainProvider user={session?.user}>
          <StyledComponentsRegistry>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            {children}
          </StyledComponentsRegistry>
        </MainProvider>
      </body>
    </html>
  );
}
