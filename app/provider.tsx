"use client";

import { ThemeProvider } from "@/components/theme-provider";

interface Props {
  children: React.JSX.Element;
}
function Providers({ children }: Props) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
