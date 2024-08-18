import React, { type FC } from "react";

import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

// MusicCards component is for music.astro

type MusicCards = {
    title?: string;
    description?: string;
    cards?: {
        title: string;
        description: string;
    }[];
};

export const MusicCards: FC<MusicCards> = ({
    cards,
    description,
    title,
}) => {

    // do not render if there are no cards
    if (!cards || !cards.length) {
        return null;
    }

    const cardsElements = cards.map((card, index) => {
        return (
            <FadeIn key={index}>
                <TextBox>
                    <h3>{card.title}</h3>
                    {/* Use dangerouslySetInnerHTML to be able to render HTML content as well: */}
                    <div dangerouslySetInnerHTML={{ __html: card.description }} />
                    {/* todo: dangerouslySetInnerHTML lets one to put an untrusted source. Change to allowing only trusted source.*/}
                </TextBox>
            </FadeIn>
        );
    });

    return (
        <S.MusicCardsStyled>
            <Container>
                {title && description && (
                    <FadeIn>
                        <S.MusicCardsHeading>
                            {description && <p>{description}</p>}
                            {title && <h2>{title}</h2>}
                        </S.MusicCardsHeading>
                    </FadeIn>
                )}
                <S.MusicCardsGrid>{cardsElements}</S.MusicCardsGrid>
            </Container>
        </S.MusicCardsStyled>
    );
};
