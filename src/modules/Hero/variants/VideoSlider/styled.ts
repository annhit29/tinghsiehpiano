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

export const VideoSliderHeading = styled.div`
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
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 10px;
`;

export const VideoSliderStyled = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

export const VideoSlide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    iframe {
        margin-top: 20px;
    }
`;

export const SlideNavLeft = styled.div`
    position: absolute; // Absolute position
    top: 60%; // 60% from the top
    left: 120px; // 120px from the left
    transform: translateY(-50%); // Center vertically
    cursor: pointer;
    z-index: 10;

    &.disabled svg {
        fill: rgba(0, 0, 0, 0.5); // Semi-transparent when disabled
    }
`;

export const SlideNavRight = styled.div`
    position: absolute;
    top: 60%;
    right: 120px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;

    &.disabled svg {
        fill: rgba(0, 0, 0, 0.5); // Semi-transparent when disabled
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

// todo: cont: ask chatGPT on conversation https://chatgpt.com/c/5115a22e-9804-4108-b9f2-9d6ff0a73573
// 1) SlideNavLeft and SlideNavRight should be transparent when one of them is onSlideChange
// 2) SlideNavLeft and SlideNavRight should be semi-transparent when isLeftDisabled OR isRightDisabled OR both are true.
// 3) later: add play button