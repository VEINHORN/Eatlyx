import type React from "react";

export type NavigationItem = {
  label: string;
  path?: string;
  onClick?: (event: React.MouseEvent) => Promise<void>;
};
