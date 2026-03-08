import { useState, useEffect, useCallback } from "react";

export function useLocalePath() {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    if (window.location.pathname.startsWith("/fr")) {
      setPrefix("/fr");
    }
  }, []);

  return useCallback(
    (path: string) => {
      if (path === "/") return prefix || "/";
      return `${prefix}${path}`;
    },
    [prefix]
  );
}
