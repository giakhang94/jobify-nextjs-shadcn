"use client";
import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & { children: React.ReactNode; attribute: string }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
