import { Container } from "@components/Container";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

// BiographyStyled is a styled component that contains the Biography section, for biography.astro .

export const BiographyStyled = styled.section`
    background: ${Theme.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 90px;
    z-index: 1;
    position: relative;
`;

export const BiographyStyledWrapper = styled.div`
    max-width: 920px;
    margin: 0 auto;
`;

export const BiographyTitle = styled.h2`
    &,
    &:last-child {
        margin-bottom: 90px;
    }
`;

export const ContainerStyled = styled(Container)`
    ${MediaQuery.min("xxxl")} {
        max-width: 920px;
    }
`;

export const BiographyBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 40px 0;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;

export const BiographyParagraph = styled.p`
    line-height: 24px !important; /* Adjust for line spacing within the paragraph, and force this line-height to apply.*/
    margin-bottom: 20px; /* Adjust for spacing between paragraphs */
    &:last-child {
        margin-bottom: 0; /* Ensure no extra margin on the last paragraph */
    }
`;
