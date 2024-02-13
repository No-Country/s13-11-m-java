import React from "react";
import { ExampleContext } from "../context/exampleContext";

const useExampleContext = () => {
  const { example, setExample } = React.useContext(ExampleContext);

  return { example, setExample };
};

export default useExampleContext;
