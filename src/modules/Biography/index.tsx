import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

// Biography component is for biography.astro

export const Biography: FC = () => {
    return (
        <S.BiographyStyled>
            <S.ContainerStyled>
                <FadeIn> {/* FadeIn 0 seconds by default (see its source code) */}
                    <TextBox variant="background-text" bgText="Address">
                        <h3>I am a Taiwanese pianist.</h3>
                        
                        <p>A virtuoso pianist hailing from Taiwan, renowned for their exquisite artistry and captivating performances.</p>
                        <p>This Taiwanese maestro enchants audiences with a blend of technical prowess and emotional depth, elevating the art of piano to new heights.</p>
                        <p>With each note, the pianist weaves a rich tapestry of sound, reflecting the vibrant cultural heritage of their homeland.</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.BiographyStyled>
    );
};
