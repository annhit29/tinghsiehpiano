import React, { type FC, useState } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Pagination, Navigation } from "swiper/modules";
import { Icon } from "@static/icons";
import { Container } from "@components/Container";

// VideoSlider component is a slider that displays videos which uses SwiperSlider component to create the slider.

export type VideoSliderProps = {
    title?: string; // Title of the video section
    videoTitles?: string[]; // Array of video titles
    videos: string[]; // Array of video URLs
};

export const VideoSlider: FC<VideoSliderProps> = ({ title, videoTitles, videos }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Determine the state of the arrows
    const isLeftDisabled = currentSlide === 0;
    const isRightDisabled = currentSlide === videos.length - 1;

    return (
        <S.VideoSliderStyled>
                    <S.VideoCardsStyled>

            <Container> {/* Wrap the entire VideoSlider content in a Container to have "Discography" and "Videos" title starting at the same x-position.*/}

            {title && (
                <S.VideoSliderHeading>
                    <h2>{title}</h2>
                </S.VideoSliderHeading>
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
                        type: "progressbar",
                    },
                    on: {
                        slideChange: (swiper) => setCurrentSlide(swiper.activeIndex),
                    },
                }}
            >
                {videos.map((videoUrl, index) => (
                            <S.VideoSlide key={index}>
                                {/* Title container */}
                                {videoTitles && videoTitles[index] && (
                                    <S.VideoTitle>
                                        {videoTitles[index]}
                                    </S.VideoTitle>
                                )}

                                <iframe
                                    width="860px"
                                    height="484px" // 484px is the standard height for 560px width videos for the 16:9 aspect ratio
                                    src={videoUrl}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </S.VideoSlide>
                ))}
            </SwiperSlider>
            <S.SlideNavLeft className={`swiper-button-prev ${isLeftDisabled ? 'disabled' : ''}`}>
                <Icon iconData="arrowLeft" alt="left arrow" />
            </S.SlideNavLeft>
            <S.SlideNavRight className={`swiper-button-next ${isRightDisabled ? 'disabled' : ''}`}>
                <Icon iconData="arrowRight" alt="right arrow" />
            </S.SlideNavRight>
            <div className="swiper-pagination"></div>
            </Container>
            </S.VideoCardsStyled>
        </S.VideoSliderStyled>
    );
};
