import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  styleOverrides: {
    borderRadius: "0.5rem",
    borderWidth: "0",
    codeBackground: ({ theme }) =>
      theme.type === "dark" ? "var(--color-zinc-800)" : "#f5f5f5",
    frames: {
      shadowColor: "transparent",
    },
  },
  themeCssSelector: (theme) =>
    theme.type === "dark" ? `[data-theme="dark"]` : `[data-theme="light"]`,
});
