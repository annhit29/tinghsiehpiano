import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";
import { useTranslation } from "react-i18next";
import "../../i18n";

export const Navigation: FC = () => {
    const { t } = useTranslation("navigation");
    
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/"> {t("home")} </a>
                    </li>
                    {/* <li>
                        <a
                            href="https://www.instagram.com/weitingpianist/"
                            target="_blank"
                        >
                            Social Media
                        </a>
                    </li> */}
                    <li>
                        <a href="/calendar"> {t("calendar")} </a>
                    </li>
                    <li>
                        <a href="/music"> {t("music")} </a>
                    </li>
                    <li>
                        <a href="/biography"> {t("biography")} </a>
                    </li>
                    <li>
                        <a href="/contact"> {t("contact")} </a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
