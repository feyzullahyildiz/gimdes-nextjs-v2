import React from "react";
import { NavigationProgressBarProvider } from "./navigation-progressbar-provider";
interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
      <NavigationProgressBarProvider>{children}</NavigationProgressBarProvider>
  );
};
