import { type FC } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Pagination } from "swiper/modules";
import { Container } from "@components/Container";

// PianistVideoSlider component is a slider that displays videos which uses SwiperSlider component to create the slider.

export type PianistVideoSliderProps = {
    title?: string; // Title of the video section
    videoTitles?: string[]; // Array of video titles
    videos: string[]; // Array of video URLs
};

export const PianistVideoSlider: FC<PianistVideoSliderProps> = ({ title, videoTitles, videos }) => {
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
                modules={[Pagination]}
                options={{
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
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
            <div className="swiper-pagination"></div>
            </Container>
            </S.VideoCardsStyled>
        </S.PianistVideoSliderStyled>
    );
};
