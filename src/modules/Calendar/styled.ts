import { Container } from "@components/Container";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

// CalendarStyled is a styled component that contains the Calendar section, for calendar.astro .

export const CalendarStyled = styled.section`
    background: ${Theme.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 90px;
    z-index: 1;
    position: relative;
`;

export const CalendarStyledWrapper = styled.div`
    max-width: 920px;
    margin: 0 auto;
`;

export const CalendarTitle = styled.h2`
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

export const CalendarBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 40px 0;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;

export const ScheduleHeader1 = styled.div`
    display: inline-flex; /* Align h3, h4, and h5 in a row */
    align-items: baseline; /* Align h3, h4, and h5 at the baseline */
    h3 {
        font-size: 24px; /* Schedule title h3 in 24px */
    }
    h4 {
        font-size: 20px; /* 4px smaller than h3 */
        margin-left: 12px; /* Space between the schedule title and date */
    }
`;

export const ScheduleHeader2 = styled.div`
    h5 {
        font-size: 16px; /* 4px smaller than h4 */
        margin-top: 4px; /* Adjust margin if necessary */
        margin-bottom: 16px; /* Adjust margin if necessary */
    }
`;