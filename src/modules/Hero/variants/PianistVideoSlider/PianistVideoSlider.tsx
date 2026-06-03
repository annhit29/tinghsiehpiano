import { type FC, useState } from "react";

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

// Pull the 11-char video id out of any YouTube url (embed / watch / youtu.be).
const getYouTubeId = (url: string): string => {
    const match = url.match(
        /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : "";
};

const withAutoplay = (url: string): string =>
    `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;

// One slide. It shows a poster (thumbnail + play button) first: a poster is a plain
// image, so the carousel can be swiped across it on touch devices. The heavy YouTube
// iframe is only mounted once the user actually presses play.
const VideoSlideItem: FC<{ videoUrl: string; title?: string; index: number }> = ({
    videoUrl,
    title,
    index,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const id = getYouTubeId(videoUrl);

    return (
        <S.VideoSlide>
            {title && <S.VideoTitle>{title}</S.VideoTitle>}

            <S.VideoFrame>
                {isPlaying ? (
                    <S.PlayingIframe
                        src={withAutoplay(videoUrl)}
                        title={title ?? `Video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ) : (
                    <S.VideoThumbnailButton
                        type="button"
                        onClick={() => setIsPlaying(true)}
                        aria-label={title ? `Play: ${title}` : `Play video ${index + 1}`}
                    >
                        <img
                            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                            alt={title ?? `Video ${index + 1} thumbnail`}
                            loading="lazy"
                            // maxres isn't generated for every video: fall back to the always-present hq image.
                            onError={(e) => {
                                e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                            }}
                        />
                        <S.PlayButton className="play-button" aria-hidden="true" />
                    </S.VideoThumbnailButton>
                )}
            </S.VideoFrame>
        </S.VideoSlide>
    );
};

export const PianistVideoSlider: FC<PianistVideoSliderProps> = ({ title, videoTitles, videos }) => {
    return (
        <S.PianistVideoSliderStyled>
            <S.VideoCardsStyled>
                {/* Wrap the content in a Container so "Discography" and "Videos" titles share the same x-position. */}
                <Container>
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
                            grabCursor: true, // "grab" cursor on desktop hints the slides are draggable
                            pagination: {
                                el: ".swiper-pagination",
                                type: "bullets",
                                clickable: true,
                            },
                        }}
                    >
                        {videos.map((videoUrl, index) => (
                            <VideoSlideItem
                                key={index}
                                videoUrl={videoUrl}
                                title={videoTitles?.[index]}
                                index={index}
                            />
                        ))}
                    </SwiperSlider>
                    <div className="swiper-pagination"></div>
                </Container>
            </S.VideoCardsStyled>
        </S.PianistVideoSliderStyled>
    );
};
