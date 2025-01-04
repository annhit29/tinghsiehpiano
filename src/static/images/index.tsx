import { type FC } from "react";
import PreviewPng from "./preview-homepage1.webp";
import PianistImg from "./pianist-img.webp";
import Logo from "./logo.webp";

import PianistSlider1 from "./homepage1.webp";
import PianistSlider2 from "./aboutme.webp";
import PianistSlider3 from "./homepage2.webp";
import PianistSlider4 from "./contact.webp";

import MusicPageImg1 from "./music-page-1.webp"; // todo: might put this image in the music page later
import MusicPageImg2 from "./music-page-2.webp"; // todo: might put this image in the music page later

export const images = {
    preview: PreviewPng,
    pianistImg: PianistImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    PianistSlider1 as PianistSlider1,
    PianistSlider2 as PianistSlider2,
    PianistSlider3 as PianistSlider3,
    PianistSlider4 as PianistSlider4,
    
    MusicPageImg1,
    MusicPageImg2,
};
