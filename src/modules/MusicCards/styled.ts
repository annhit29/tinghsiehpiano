import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

// MusicCardsStyled is a styled component that contains the MusicCards section, for music.astro .

export const MusicCardsStyled = styled.section`
    background: ${Theme.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`;

// MusicCardsHeading is a styled component that contains the description <p> and the title <h2> of the MusicCards section.
export const MusicCardsHeading = styled.div`
    color: ${Theme.secondary};

    margin-bottom: 40px;
    max-width: 550px;

    p {
        color: ${Theme.tertiary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`;

// the styled component MusicCardsGrid is for the discography cards:
export const MusicCardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 discography cards per row
    // grid-template-columns: repeat(3, 1fr); // 3 discography cards per row
    gap: 40px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    h3 {
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.5px;
        opacity: 0.8;
    }
`;
