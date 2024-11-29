### Using clerk.com for authentication

- go to clerk.com -> create account
- create application
- install clear (following the docs)

Then

1. go to the `root layout` -> import `ClerkProvider` from `clerk/nextjs`
2. wrap all the <html> tag by the `ClerkProvider`
3. restart the server
4. create `root/middleware.tsx` and paste the code clerk provided on its website

### custome providers to use toggle theme

1. go to app/components/theme-provider.tsx

```ts
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
```

2. Go go `app/providers.tsx`

```tsx
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
```

3. copy paste to the `Toggle` component

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Form create job

1. Có thể tự làm tay như thường lệ
2. Dùng Shadcn form cũng được. Dùng thì đọc Docs cũng dễ hiểu.
