import React, { type FC } from "react";

import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

type DiscographyCards = {
    title?: string;
    description?: string;
    cards?: {
        title: string;
        description: string;
    }[];
};

export const DiscographyCards: FC<DiscographyCards> = ({
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
        <S.DiscographyCardsStyled>
            <Container>
                {title && description && (
                    <FadeIn>
                        <S.DiscographyCardsHeading>
                            {description && <p>{description}</p>}
                            {title && <h2>{title}</h2>}
                        </S.DiscographyCardsHeading>
                    </FadeIn>
                )}
                <S.DiscographyCardsGrid>{cardsElements}</S.DiscographyCardsGrid>
            </Container>
        </S.DiscographyCardsStyled>
    );
};
