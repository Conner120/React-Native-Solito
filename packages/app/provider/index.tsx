import React from 'react';
import { GluestackUI } from './gluestack-ui';
import { AuthProvider } from '../features/auth/authProvider';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <GluestackUI>
      <AuthProvider>{children}</AuthProvider>
    </GluestackUI>
  );
}
