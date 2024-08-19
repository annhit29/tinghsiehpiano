import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

// Calendar component is for calendar.astro

// schedule title, date, location, and program, link to external websites
export const Calendar: FC = () => {
    return (
        <S.CalendarStyled>
            <S.ContainerStyled>
                <S.CalendarBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Schedule1"
                            boxAsLink={true}
                            href="https://www.hmtm-hannover.de/de/alle-veranstaltungen/?no_cache=1"
                            target="_blank"
                        >
                        <S.ScheduleHeader1>
                            <h3>Piano Solo Recital</h3>
                            <h4>September 9, 2024</h4>
                        </S.ScheduleHeader1>
                        <S.ScheduleHeader2>
                            <h5>Hannover, Germany</h5>
                        </S.ScheduleHeader2>
                        <p>Program TBA</p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Schedule2"
                            boxAsLink={true}
                            href="https://cha.ntue.edu.tw/%e6%b4%bb%e5%8b%95%e8%b3%87%e8%a8%8a/"
                            target="_blank"
                        >
                        <S.ScheduleHeader1>
                            <h3>NTUE Concert</h3>
                            <h4>October 15, 2024</h4>
                        </S.ScheduleHeader1>
                        <S.ScheduleHeader2>
                            <h5>Taiwan National Concert Hall</h5>
                        </S.ScheduleHeader2>
                        <p>Bartók: Concerto for Two Pianos</p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <TextBox
                            variant="background-text"
                            bgText="Schedule3"
                            boxAsLink={false}
                            // boxAsLink={true}
                            // href=""
                            target="_blank"
                        >
                        <S.ScheduleHeader1>
                            <h3>Piano Solo Recital</h3>
                            <h4>January 25, 2025</h4>
                        </S.ScheduleHeader1>
                        <S.ScheduleHeader2>
                        <h5>Taiwan National Concert Hall</h5>
                        </S.ScheduleHeader2>
                        <p>Program TBA</p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <TextBox
                            variant="background-text"
                            bgText="Schedule4"
                            boxAsLink={false}
                            // boxAsLink={true}
                            // href=""
                            target="_blank"
                        >
                        <S.ScheduleHeader1>
                            <h3>Piano Solo Recital</h3>
                            <h4>February 8, 2025</h4>
                        </S.ScheduleHeader1>
                        <S.ScheduleHeader2>
                        <h5>National Taichung Theater</h5>
                        </S.ScheduleHeader2>
                        <p>Program TBA</p>
                        </TextBox>
                    </FadeIn>
                </S.CalendarBox>
                {/* <FadeIn delay={0.5}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        
                        <p>Some street 123, 12345 City, Country</p>
                        <p>Office: No. 134, Ho-ping East Rd., Sec. 2, Daan District, Taipei City 10671, Taiwan</p>
                    </TextBox>
                </FadeIn> */}
            </S.ContainerStyled>
        </S.CalendarStyled>
    );
};
