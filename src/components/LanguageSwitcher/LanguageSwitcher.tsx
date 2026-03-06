import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "../../i18n";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

/**
 * Build the equivalent path in the target language.
 * e.g. /fr/contact → /contact (switching to en)
 *      /contact    → /fr/contact (switching to fr)
 */
const getLocalePath = (targetLang: string, path: string): string => {
  if (targetLang === "fr") {
    if (path.startsWith("/fr")) return path;
    return path === "/" ? "/fr" : `/fr${path}`;
  }

  // Switching to en: strip /fr prefix
  if (path === "/fr" || path === "/fr/") return "/";
  if (path.startsWith("/fr/")) return path.replace(/^\/fr/, "");
  return path;
};

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [pathname, setPathname] = useState("/");

  // Read window.location only on the client after mount
  useEffect(() => {
    const path = window.location.pathname;
    setPathname(path);
    setCurrentLang(path.startsWith("/fr") ? "fr" : "en");
  }, []);

  return (
    <SwitcherWrapper>
      {languages.map((lng, index) => (
        <React.Fragment key={lng.code}>
          {index > 0 && <Separator>|</Separator>}
          <LangLink
            href={getLocalePath(lng.code, pathname)}
            $active={lng.code === currentLang}
          >
            {lng.label}
          </LangLink>
        </React.Fragment>
      ))}
    </SwitcherWrapper>
  );
};

export default LanguageSwitcher;

/* ---------- Styled Components ---------- */

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 24px;
  flex-shrink: 0;
`;

const LangLink = styled.a<{ $active: boolean }>`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.5)")};
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Separator = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  user-select: none;
`;