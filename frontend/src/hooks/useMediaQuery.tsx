import React from "react";

const useMediaQuery = (query: string) => {
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = React.useState(mediaQuery.matches);

  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
