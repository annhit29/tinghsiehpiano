import styled from "@emotion/styled";

// PianistWrapper is a styled component that contains the Pianist section, for index.astro which is the highest level component.

export const PianistWrapper = styled.section<{
    $isFullWidth?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
`;
