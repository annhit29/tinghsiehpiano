// import React, { type FC, useState } from "react";
import { type FC, useState } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Pagination, Navigation } from "swiper/modules";
import { Container } from "@components/Container";

// PianistVideoSlider component is a slider that displays videos which uses SwiperSlider component to create the slider.

// Slim, hand-drawn chevron (thin stroke, rounded caps) — replaces the cheap icon asset.
// `currentColor` lets the chevron follow the button's text colour, so it can flip to white on hover.
const Chevron: FC<{ direction: "left" | "right" }> = ({ direction }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <polyline points={direction === "left" ? "14 6 8 12 14 18" : "10 6 16 12 10 18"} />
    </svg>
);

export type PianistVideoSliderProps = {
    title?: string; // Title of the video section
    videoTitles?: string[]; // Array of video titles
    videos: string[]; // Array of video URLs
};

export const PianistVideoSlider: FC<PianistVideoSliderProps> = ({ title, videoTitles, videos }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Determine the state of the arrows
    const isLeftDisabled = currentSlide === 0;
    const isRightDisabled = currentSlide === videos.length - 1;

    return (
        <S.PianistVideoSliderStyled>
                    <S.VideoCardsStyled>

            <Container> {/* Wrap the entire PianistVideoSlider content in a Container to have "Discography" and "Videos" title starting at the same x-position.*/}

            {title && (
                <S.PianistVideoSliderHeading>
                    <h2>{title}</h2>
                </S.PianistVideoSliderHeading>
            )}
            <SwiperSlider
                modules={[Pagination, Navigation]}
                options={{
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    },
                    on: {
                        slideChange: (swiper) => setCurrentSlide(swiper.activeIndex),
                    },
                }}
            >
                {videos.map((videoUrl, index) => (
                            <S.VideoSlide key={index}>
                                {/* Title container: */}
                                {videoTitles && videoTitles[index] && (
                                    <S.VideoTitle>
                                        {videoTitles[index]}
                                    </S.VideoTitle>
                                )}

                                {/* Video container: */}
                                <S.ResponsiveIframe
                                    src={videoUrl}
                                    title={`Video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </S.VideoSlide>
                ))}
            </SwiperSlider>
            {videos.length > 1 && (
                <>
                    <S.SlideNavLeft
                        className={`swiper-button-prev ${isLeftDisabled ? 'disabled' : ''}`}
                        aria-label="Previous video"
                    >
                        <Chevron direction="left" />
                    </S.SlideNavLeft>
                    <S.SlideNavRight
                        className={`swiper-button-next ${isRightDisabled ? 'disabled' : ''}`}
                        aria-label="Next video"
                    >
                        <Chevron direction="right" />
                    </S.SlideNavRight>
                </>
            )}
            <div className="swiper-pagination"></div>
            </Container>
            </S.VideoCardsStyled>
        </S.PianistVideoSliderStyled>
    );
};
