import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";
import { useTranslation } from "react-i18next";
import "../../i18n";

export const Footer: FC = () => {
    const { t } = useTranslation("footer");

    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <Logo />
                    <S.FooterContent>
                        <p>
                            © 2025-2026 {t("copyright")} {" "}
                            <a href="https://www.linkedin.com/in/wei-en-hsieh-23397322b/" target="_blank" rel="noopener noreferrer">Wei-En Hsieh</a>
                            {" "}
                            <a href="https://github.com/annhit29" target="_blank" rel="noopener noreferrer">(annhit29)</a>
                        </p>
                    </S.FooterContent>
                </S.FooterContainer>

                <Socials />
            </Container>
        </S.FooterStyled>
    );
};
