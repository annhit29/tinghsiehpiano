import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "../../i18n";
import { LOCALES, DEFAULT_LOCALE, detectLocale, localizePath } from "../../locales/config";

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(DEFAULT_LOCALE);
  const [pathname, setPathname] = useState("/");

  // Read window.location only on the client after mount
  useEffect(() => {
    const path = window.location.pathname;
    setPathname(path);
    setCurrentLang(detectLocale(path));
  }, []);

  return (
    <SwitcherWrapper>
      {LOCALES.map((lng, index) => (
        <React.Fragment key={lng.code}>
          {index > 0 && <Separator>|</Separator>}
          <LangLink
            href={localizePath(lng.code, pathname)}
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