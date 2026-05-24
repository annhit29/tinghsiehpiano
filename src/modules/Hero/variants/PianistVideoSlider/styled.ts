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
    color: ${Theme.secondary};
    font-size: clamp(20px, 2vw, 24px); // Responsive font-size: the font-size is at least 20px, and at most 24px, and scales dynamically with the viewport width (2% of the viewport width). This 2% makes the font-size responsive to screen size.
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 10px;
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

    // iframe {
    //     margin-top: 20px;
    // }
`;

const SlideNav = styled.div`
    position: absolute;
    top: 58%; // roughly centered on the video
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;

    // Outlined by default: thin ring, dark chevron, transparent fill.
    color: ${Theme.secondary};
    background: transparent;
    border: 1px solid ${Theme.secondary};
    transition: color 250ms ease, background-color 250ms ease, border-color 250ms ease;

    svg {
        width: 22px;
        height: 22px;
        // Nudge the chevron a hair toward its travel direction for better optical centering.
        transition: transform 250ms ease;
    }

    // Fills solid on hover, chevron flips to the panel colour.
    &:hover {
        color: ${Theme.primary};
        background: ${Theme.secondary};
        border-color: ${Theme.secondary};
    }

    // Dim (and disable clicks on) the arrow when there is no slide in that direction.
    &.disabled {
        opacity: 0.25;
        pointer-events: none;
    }

    // On small screens the dots + native swipe are enough; arrows would overlap the video.
    ${MediaQuery.max("lg")} {
        display: none;
    }
`;

export const SlideNavLeft = styled(SlideNav)`
    left: 40px;

    &:hover svg {
        transform: translateX(-2px);
    }
`;

export const SlideNavRight = styled(SlideNav)`
    right: 40px;

    &:hover svg {
        transform: translateX(2px);
    }
`;

export const Thumbnail = styled.div`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: calc(100vw * 9 / 16); // 16:9 aspect ratio
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const PlayButton = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    &::before {
        content: "";
        border-left: 20px solid #fff;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        margin-left: 5px;
    }
`;

export const ResponsiveIframe = styled.iframe`
    width: 100%; // Make the iframe responsive with height: 400px
    height:calc(100vw * (9 / 16)); // 16:9 aspect ratio wrt the viewport width (100vw), of the iframe 
    max-width: 46rem; // Limit the maximum width, for better readability
    max-height: 26rem; // Limit the maximum height, for better readability
    border: none; // Remove iframe borders
`;

// todo: cont: ask chatGPT on conversation https://chatgpt.com/c/5115a22e-9804-4108-b9f2-9d6ff0a73573
// 1) SlideNavLeft and SlideNavRight should be transparent when one of them is onSlideChange
// 2) SlideNavLeft and SlideNavRight should be semi-transparent when isLeftDisabled OR isRightDisabled OR both are true.
// 3) later: add play button