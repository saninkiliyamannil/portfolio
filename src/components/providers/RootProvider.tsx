"use client";

import { type ReactNode } from "react";
import { SanityProvider } from "@/contexts/SanityContext";

export function RootProvider({ children }: { children: ReactNode }) {
  return <SanityProvider>{children}</SanityProvider>;
}
