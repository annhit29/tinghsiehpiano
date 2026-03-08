import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useLocalePath } from "../../hooks/useLocalePath";

export const Navigation: FC = () => {
    const { t } = useTranslation("navigation");
    const localePath = useLocalePath();

    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href={localePath("/")}> {t("home")} </a>
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
                        <a href={localePath("/calendar")}> {t("calendar")} </a>
                    </li>
                    <li>
                        <a href={localePath("/music")}> {t("music")} </a>
                    </li>
                    <li>
                        <a href={localePath("/biography")}> {t("biography")} </a>
                    </li>
                    <li>
                        <a href={localePath("/contact")}> {t("contact")} </a>
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
