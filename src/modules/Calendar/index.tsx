import { type FC, useState, useMemo, useEffect } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// Calendar component is for calendar.astro

interface CalendarEvent {
    id: string;
    title: string;
    date: string; // ISO date string for comparison (YYYY-MM-DD)
    displayDate: string; // Human-readable date
    venue: string;
    description: string;
    href: string;
    bgText: string;
}

const events: CalendarEvent[] = [
    {
        id: "chopin-openair-26",
        title: "Open-air Chopin concert",
        date: "2026-11-14",
        displayDate: "November 14, 2026",
        venue: "Venue: TBA",
        description: "",
        href: "",
        bgText: "Schedule3",
    },
    {
        id: "recital-oct26",
        title: "Piano Solo Recital",
        date: "2026-10-29",
        displayDate: "October 29, 2026",
        venue: "Venue: TBA",
        description: "",
        href: "",
        bgText: "Schedule3",
    },
    {
        id: "shanghai-bank-concert",
        title: "Shanghai Commercial Bank Piano Concert",
        date: "2026-06-03",
        displayDate: "June 3, 2026",
        venue: "Venue: TBA",
        description: "",
        href: "",
        bgText: "Schedule3",
    },
    {
        id: "unboxing-concert",
        title: "Sound Beyond the Ordinary — C. Bechstein Century-Old Masterpiece Unveiling Concert",
        date: "2026-05-23",
        displayDate: "May 23, 2026, 2:00 PM",
        venue: "Yunlin Performance Hall",
        description: "Click me to see more!",
        href: "https://www.opentix.life/event/2048954204112920577",
        bgText: "Schedule3",
    },
    {
        id: "palermo-classica",
        title: "Piano Recital Palermo Classica",
        date: "2026-04-05",
        displayDate: "April 5, 2026",
        venue: "Complesso Monumentale dello Steri",
        description: "Between Balance and Storm - Mozart and Schumann",
        href: "https://palermoclassica.organizzatori.18tickets.it/event/46972",
        bgText: "Schedule3",
    },
    {
        id: "university-130",
        title: "University 130th Anniversary Concert",
        date: "2025-12-02",
        displayDate: "December 2, 2025",
        venue: "National Taiwan Concert Hall",
        description: "Piano Concerto No. 2",
        href: "https://www.opentix.life/event/1973931012924928001",
        bgText: "Schedule3",
    },
    {
        id: "chopin-openair",
        title: "Open-air Chopin concert",
        date: "2025-11-16",
        displayDate: "November 16, 2025",
        venue: "Daan Forest Park",
        description: "Click me to see the program!",
        href: "https://www.instagram.com/weitingpianist/p/DQeREcpD-d6/",
        bgText: "Schedule3",
    },
    {
        id: "masterclass-aug25",
        title: "Piano Masterclass",
        date: "2025-08-23",
        displayDate: "August 23, 2025",
        venue: "TT Music Space",
        description: "Playing Chopin",
        href: "https://www.accupass.com/event/2504020134091864911796",
        bgText: "Schedule3",
    },
    {
        id: "recital-jan25",
        title: "Piano Solo Recital",
        date: "2025-01-25",
        displayDate: "January 25, 2025",
        venue: "National Taiwan Concert Hall",
        description: "Click me to see the program!",
        href: "https://www.opentix.life/event/1864527088004038657",
        bgText: "Schedule3",
    },
    {
        id: "recital-feb25",
        title: "Piano Solo Recital",
        date: "2025-02-08",
        displayDate: "February 8, 2025",
        venue: "National Taichung Theater",
        description: "Click me to see the program!",
        href: "https://www.opentix.life/event/1864527088004038657",
        bgText: "Schedule4",
    },
    {
        id: "recital-sep24",
        title: "Piano Solo Recital",
        date: "2024-09-09",
        displayDate: "September 9, 2024",
        venue: "Hannover, Germany",
        description: "Click me to see the program!",
        href: "https://www.hmtm-hannover.de/de/alle-veranstaltungen/?no_cache=1",
        bgText: "Schedule1",
    },
    {
        id: "ntue-oct24",
        title: "NTUE Concert",
        date: "2024-10-15",
        displayDate: "October 15, 2024",
        venue: "National Taiwan Concert Hall",
        description: "Bartók: Concerto for Two Pianos",
        href: "https://cha.ntue.edu.tw/%e6%b4%bb%e5%8b%95%e8%b3%87%e8%a8%8a/",
        bgText: "Schedule2",
    },
];

// schedule title, date, location, and program, link to external websites
export const Calendar: FC = () => {
    const { t } = useTranslation("calendar");

    // Always sync i18n language with URL path on mount
    useEffect(() => {
        const path = window.location.pathname;
        const lang = path.startsWith("/fr") ? "fr" : "en";
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, []);

    const today = useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    const upcomingEvents = useMemo(
        () =>
            events
                .filter((e) => new Date(e.date) >= today)
                .sort(
                    (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                ),
        [today]
    );

    const pastEvents = useMemo(
        () =>
            events
                .filter((e) => new Date(e.date) < today)
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                ),
        [today]
    );

    const [activeTab, setActiveTab] = useState<"upcoming" | "past">(
        upcomingEvents.length > 0 ? "upcoming" : "past"
    );

    const displayedEvents =
        activeTab === "upcoming" ? upcomingEvents : pastEvents;

    return (
        <S.CalendarStyled>
            <S.ContainerStyled>
                <S.TabContainer>
                    <S.TabButton
                        $active={activeTab === "upcoming"}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        {t("upcoming", "Upcoming")}
                    </S.TabButton>
                    <S.TabButton
                        $active={activeTab === "past"}
                        onClick={() => setActiveTab("past")}
                    >
                        {t("past", "Past")}
                    </S.TabButton>
                </S.TabContainer>

                <S.CalendarBox>
                    {displayedEvents.length > 0 ? (
                        displayedEvents.map((event) => (
                            <TextBox
                                key={event.id}
                                variant="background-text"
                                bgText={event.bgText}
                                boxAsLink={true}
                                href={event.href}
                                target="_blank"
                            >
                                <S.ScheduleHeader1>
                                    <h3>{t(`${event.id}.title`, event.title)}</h3>
                                    <h4>{t(`${event.id}.displayDate`, event.displayDate)}</h4>
                                </S.ScheduleHeader1>
                                <S.ScheduleHeader2>
                                    <h3>{t(`${event.id}.venue`, event.venue)}</h3>
                                </S.ScheduleHeader2>
                                <p>{t(`${event.id}.description`, event.description)}</p>
                            </TextBox>
                        ))
                    ) : (
                        <S.EmptyState>
                            {t("noUpcomingEvents", "No upcoming events — check back soon!")}
                        </S.EmptyState>
                    )}
                </S.CalendarBox>
            </S.ContainerStyled>
        </S.CalendarStyled>
    );
};
