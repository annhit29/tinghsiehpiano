import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

// AboutMe component is for aboutme.astro

export const AboutMe: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>I am a Taiwanese pianist.</h3>
                        
                        <p>A virtuoso pianist hailing from Taiwan, renowned for their exquisite artistry and captivating performances.</p>
                        <p>This Taiwanese maestro enchants audiences with a blend of technical prowess and emotional depth, elevating the art of piano to new heights.</p>
                        <p>With each note, the pianist weaves a rich tapestry of sound, reflecting the vibrant cultural heritage of their homeland.</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
