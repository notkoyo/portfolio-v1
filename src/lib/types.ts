import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export type Theme = "light" | "dark";

export type ThemeContextProviderProps = {
  children: React.ReactNode;
}

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}