import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const VideoCardsStyled = styled.section`
    background: ${Theme.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`;

export const PianistVideoSliderHeading = styled.div`
    color: ${Theme.secondary};
    margin-bottom: 40px;
    max-width: 550px;

    p {
        color: ${Theme.tertiary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`;

export const VideoTitle = styled.div`
    width: 100%;
    max-width: 48rem; // match the video frame width so the title lines up with it
    color: ${Theme.secondary};
    font-size: clamp(20px, 2vw, 24px); // Responsive font-size: the font-size is at least 20px, and at most 24px, and scales dynamically with the viewport width (2% of the viewport width). This 2% makes the font-size responsive to screen size.
    font-weight: bold;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 18px;
`;

export const PianistVideoSliderStyled = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    /* Dot indicators: one dot per video so it's obvious there are several to swipe through. */
    .swiper-pagination {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-top: 8px;
        margin-bottom: 40px;

        .swiper-pagination-bullet {
            display: block;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: ${Theme.secondary};
            opacity: 0.3;
            cursor: pointer;
            transition: opacity 200ms ease, transform 200ms ease;

            &:hover {
                opacity: 0.6;
            }
        }

        .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.25);
        }
    }
`;

export const VideoSlide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

// The framed video area: a single rounded, shadowed box that holds either the
// poster or the playing iframe. aspect-ratio keeps it a clean 16:9 at any width.
export const VideoFrame = styled.div`
    position: relative;
    width: 100%;
    max-width: 48rem;
    aspect-ratio: 16 / 9;
    border-radius: 20px;
    overflow: hidden;
    background: ${Theme.secondary};
    box-shadow: 0 22px 45px -20px rgba(16, 17, 24, 0.5);

    ${MediaQuery.max("lg")} {
        border-radius: 14px;
    }
`;

// Poster shown before playback. It's a plain image (not an iframe), so the slider
// stays swipeable across it on touch screens.
export const VideoThumbnailButton = styled.button`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    display: block;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 600ms ease;
    }

    // Soft veil for depth and play-button contrast; deepens slightly on hover.
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            rgba(16, 17, 24, 0.05) 0%,
            rgba(16, 17, 24, 0.35) 100%
        );
        transition: background 300ms ease;
    }

    &:hover img {
        transform: scale(1.04);
    }

    &:hover::after {
        background: linear-gradient(
            180deg,
            rgba(16, 17, 24, 0.1) 0%,
            rgba(16, 17, 24, 0.45) 100%
        );
    }

    &:hover .play-button {
        transform: translate(-50%, -50%) scale(1.08);
        background: #ffffff;
    }
`;

export const PlayButton = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 8px 22px rgba(16, 17, 24, 0.35);
    transition: transform 250ms ease, background 250ms ease;

    // The play triangle.
    &::before {
        content: "";
        margin-left: 6px;
        border-left: 22px solid ${Theme.secondary};
        border-top: 13px solid transparent;
        border-bottom: 13px solid transparent;
    }

    ${MediaQuery.max("lg")} {
        width: 62px;
        height: 62px;

        &::before {
            margin-left: 5px;
            border-left: 18px solid ${Theme.secondary};
            border-top: 11px solid transparent;
            border-bottom: 11px solid transparent;
        }
    }
`;

export const PlayingIframe = styled.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
`;