export const lightTheme = {
  mode: "light" as const,
  colors: {
    // Primary shades
    primary: {
      50: "#f0fdf4", // Lightest mint
      100: "#dcfce7", // Light mint
      200: "#bbf7d0", // Soft mint
      300: "#86efac", // Bright mint
      400: "#4ade80", // Medium mint
      500: "#22c55e", // Forest green
      600: "#16a34a", // Deep forest
      700: "#15803d", // Rich forest
      800: "#166534", // Dark forest
      900: "#14532d", // Deepest forest
    },
    // Background shades
    background: {
      primary: "#dcfce7",
      secondary: "#f0fdf4",
      tertiary: "#bbf7d0",
      glass: "rgba(220, 252, 231, 0.8)",
    },
    // Text colors
    text: {
      primary: "#166534", // Dark forest for main text
      secondary: "#15803d", // Rich forest for secondary text
      tertiary: "#22c55e", // Forest green for subtle text
      inverse: "#ffffff", // White text on dark backgrounds
    },
    // Border colors
    border: {
      light: "#bbf7d0",
      medium: "#4ade80",
      dark: "#16a34a",
    },
    // Gradient combinations
    gradients: {
      primary: "linear-gradient(215deg, #16a34a, #22c55e, #4ade80, #16a34a)",
      subtle: "linear-gradient(to bottom right, #dcfce7, #f0fdf4)",
      glow: "radial-gradient(circle at center, rgba(34, 197, 94, 0.15), transparent 70%)",
      glass:
        "linear-gradient(to right, rgba(220, 252, 231, 0.5), rgba(240, 253, 244, 0.5))",
    },
    patterns: {
      leaves: "url('/assets/patterns/leaf-pattern-dark.svg')",
      vines: "url('/assets/patterns/vine-border-dark.svg')",
    },
  },
  shadows: {
    sm: "0 1px 2px rgba(21, 128, 61, 0.05)",
    md: "0 4px 6px rgba(21, 128, 61, 0.1)",
    lg: "0 10px 15px rgba(21, 128, 61, 0.1)",
    xl: "0 20px 25px rgba(21, 128, 61, 0.1)",
  },
  blur: {
    sm: "blur(4px)",
    md: "blur(8px)",
    lg: "blur(12px)",
  },
};

export const darkTheme = {
  mode: "dark" as const,
  colors: {
    // Primary shades (darker forest theme)
    primary: {
      50: "#0f2918", // Darkest forest
      100: "#14532d", // Very dark forest
      200: "#166534", // Dark forest
      300: "#15803d", // Rich forest
      400: "#16a34a", // Deep forest
      500: "#22c55e", // Forest green
      600: "#4ade80", // Medium mint
      700: "#86efac", // Bright mint
      800: "#bbf7d0", // Soft mint
      900: "#dcfce7", // Light mint
    },
    // Background shades
    background: {
      primary: "#0f2918",
      secondary: "#14532d",
      tertiary: "#166534",
      glass: "rgba(15, 41, 24, 0.8)",
    },
    // Text colors
    text: {
      primary: "#dcfce7", // Light mint for main text
      secondary: "#bbf7d0", // Soft mint for secondary text
      tertiary: "#86efac", // Bright mint for subtle text
      inverse: "#166534", // Dark forest on light backgrounds
    },
    // Border colors
    border: {
      light: "#166534",
      medium: "#15803d",
      dark: "#14532d",
    },
    // Gradient combinations
    gradients: {
      primary: "linear-gradient(215deg, #166534, #15803d, #16a34a, #166534)",
      subtle: "linear-gradient(to bottom right, #0f2918, #14532d)",
      glow: "radial-gradient(circle at center, rgba(34, 197, 94, 0.15), transparent 70%)",
      glass:
        "linear-gradient(to right, rgba(15, 41, 24, 0.5), rgba(20, 83, 45, 0.5))",
    },
    patterns: {
      leaves: "url('/assets/patterns/leaf-pattern-dark.svg')",
      vines: "url('/assets/patterns/vine-border-dark.svg')",
    },
  },
  shadows: {
    sm: "0 1px 2px rgba(22, 101, 52, 0.1)",
    md: "0 4px 6px rgba(22, 101, 52, 0.15)",
    lg: "0 10px 15px rgba(22, 101, 52, 0.15)",
    xl: "0 20px 25px rgba(22, 101, 52, 0.15)",
  },
  blur: {
    sm: "blur(4px)",
    md: "blur(8px)",
    lg: "blur(12px)",
  },
};
