"use client";
import { ProgressProvider } from "@bprogress/next/app";

interface Props {
  children: React.ReactNode;
}
export const NavigationProgressBarProvider = ({ children }: Props) => {
  return (
    <ProgressProvider
      height="2px"
      color="#e39500"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};
