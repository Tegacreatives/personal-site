"use client";
import { ThemeProvider } from "next-themes";

interface ContainerProps {
  children: React.ReactNode;
}

const Providers: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
