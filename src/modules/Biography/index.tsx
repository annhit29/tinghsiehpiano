import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
import { useTranslation } from "react-i18next";
import "../../i18n";

// Biography component is for biography.astro

export const Biography: FC = () => {
    const { t } = useTranslation("biography");
    
    return (
        <S.BiographyStyled>
            <S.ContainerStyled>
                {/* <FadeIn> FadeIn 0 seconds by default (see its source code) */}
                    <TextBox variant="background-text" bgText="Address">
                        <h3>{t("title")}</h3>
                        
                        <S.BiographyParagraph>{t("paragraph1")}</S.BiographyParagraph>
                        <S.BiographyParagraph>{t("paragraph2")}</S.BiographyParagraph>
                        <S.BiographyParagraph>{t("paragraph3")}</S.BiographyParagraph>
                        <S.BiographyParagraph>{t("paragraph4")}</S.BiographyParagraph>
                        <S.BiographyParagraph>{t("paragraph5")}</S.BiographyParagraph>
                    </TextBox>
                {/* </FadeIn> */}
            </S.ContainerStyled>
        </S.BiographyStyled>
    );
};
