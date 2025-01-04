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
                    {/* <FadeIn delay={0.1}> */}
                        <TextBox
                            variant="background-text"
                            bgText="Schedule3"
                            boxAsLink={true}
                            href="https://www.opentix.life/event/1864527088004038657"
                            target="_blank"
                        >
                        <S.ScheduleHeader1>
                            <h3>Piano Solo Recital</h3>
                            <h4>January 25, 2025</h4>
                        </S.ScheduleHeader1>
                        <S.ScheduleHeader2>
                        <h3>National Taiwan Concert Hall</h3>
                        </S.ScheduleHeader2>
                        <p>Click me to see the program!</p>
                        {/* <p>
                            <strong>Program:</strong><br />
                            Debussy Images Book I<br />
                            1. Reflets dans l’Eau<br />
                            2. Hommage à Rameau<br />
                            3. Mouvement<br /><br />

                            Chopin Fantaisie Op. 49<br />
                            Chopin Ballade No. 3 Op. 47<br /><br />

                            Debussy Images Book II<br />
                            1. Cloches à travers les Feuilles<br />
                            2. Et la Lune descend sur le Temple qui fut<br />
                            3. Poissons d’Or<br /><br />

                            Chopin Sonata No. 2 Op. 35<br />        
                        </p> */}
                        </TextBox>
                    {/* </FadeIn> */}
                    {/* <FadeIn delay={0.2}> */}
                        <TextBox
                            variant="background-text"
                            bgText="Schedule4"
                            boxAsLink={true}
                            href="https://www.opentix.life/event/1864527088004038657"
                            target="_blank"
                        >
                        <S.ScheduleHeader1>
                            <h3>Piano Solo Recital</h3>
                            <h4>February 8, 2025</h4>
                        </S.ScheduleHeader1>
                        <S.ScheduleHeader2>
                        <h3>National Taichung Theater</h3>
                        </S.ScheduleHeader2>
                        <p>Click me to see the program!</p>
                        {/* <p>
                            <strong>Program:</strong><br />
                            Debussy Images Book I<br />
                            1. Reflets dans l’Eau<br />
                            2. Hommage à Rameau<br />
                            3. Mouvement<br /><br />

                            Chopin Fantaisie Op. 49<br />
                            Chopin Ballade No. 3 Op. 47<br /><br />

                            Debussy Images Book II<br />
                            1. Cloches à travers les Feuilles<br />
                            2. Et la Lune descend sur le Temple qui fut<br />
                            3. Poissons d’Or<br /><br />

                            Chopin Sonata No. 2 Op. 35<br />         
                        </p> */}
                        </TextBox>
                    {/* </FadeIn> */}
                    {/* <FadeIn delay={0.3}> */}
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
                            <h3>Hannover, Germany</h3>
                        </S.ScheduleHeader2>
                        <p>Click me to see the program!</p>
                        </TextBox>
                    {/* </FadeIn> */}
                    {/* <FadeIn delay={0.4}> */}
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
                            <h3>National Taiwan Concert Hall</h3>
                        </S.ScheduleHeader2>
                        <p>Bartók: Concerto for Two Pianos</p>
                        </TextBox>
                    {/* </FadeIn> */}
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
