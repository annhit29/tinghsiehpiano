import { type FC } from "react";

import IconArrowDown from "./icon-arrow-down.svg";
import IconArrowCircle from "./icon-arrow-circle.svg";
import IconArrowRight from "./icon-arrow-right.svg";
import IconArrowLeft from "./icon-arrow-left.svg";
import IconArrowRightDark from "./icon-arrow-right-secondary-color.svg"
import IconArrowLeftDark from "./icon-arrow-left-secondary-color.svg"
import IconFacebook from "./icon-facebook.svg";
import IconInstagram from "./icon-instagram.svg";
import IconTwitter from "./icon-twitter.svg";
import IconLinkedIn from "./icon-linkedin.svg";
import IconGithub from "./icon-github.svg";
import IconPlayArrow24dp from "./icon-play-arrow-24dp.svg";

export const icons = {
    arrowDown: IconArrowDown,
    arrowCircle: IconArrowCircle,
    arrowRight: IconArrowRight,
    arrowLeft: IconArrowLeft,
    arrowRightDark: IconArrowRightDark,
    arrowLeftDark: IconArrowLeftDark,
    facebook: IconFacebook,
    instagram: IconInstagram,
    twitter: IconTwitter,
    linkedin: IconLinkedIn,
    github: IconGithub,
    playArrow24dp: IconPlayArrow24dp,
};

type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
    const icon = icons[iconData];

    return (
        <img
            src={icon.src}
            alt={alt}
            width={icon.width}
            height={icon.height}
            data-icon="true"
            {...rest}
        />
    );
};
