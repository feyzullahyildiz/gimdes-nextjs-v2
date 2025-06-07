"use client";
import React from "react";
import { NavigationProgressBarProvider } from "./navigation-progressbar-provider";
import { ThemeProvider } from "./theme-provider";
interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NavigationProgressBarProvider>{children}</NavigationProgressBarProvider>
    </ThemeProvider>
  );
};
