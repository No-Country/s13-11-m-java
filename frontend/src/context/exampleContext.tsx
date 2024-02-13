import React from "react";

interface ExampleContextProps {
  example: string;
  setExample: (example: string) => void;
}

export const ExampleContext = React.createContext<ExampleContextProps>({
  example: "",
  setExample: () => {},
});

interface ExampleProviderProps {
  children: React.ReactNode;
}

// export const ExampleProvider: React.FC<ExampleProviderProps> = ({ children }) => {
export const ExampleProvider = ({ children }: ExampleProviderProps) => {
  const [example, setExample] = React.useState("");

  return <ExampleContext.Provider value={{ example, setExample }}>{children}</ExampleContext.Provider>;
};
