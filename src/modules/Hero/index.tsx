import { type FC } from "react";
import * as S from "./styled";
import { TextImage, type TextImageProps } from "./variants/TextImage/TextImage";
import {
    FullPageSlider,
    type FullPageSliderProps,
} from "./variants/FullPageSlider/FullPageSlider";
import {
    ParallaxImage,
    type ParallaxImageProps,
} from "./variants/ParallaxImage/ParallaxImage";

/**
 * to avoid passing wrong props to the component
 * we can use union type to define the props
 * and use it as a prop in the component
 * this way we can avoid passing wrong props
 * and also we can have a better understanding of the component
 */
type PianistProps =
    | {
          pianistType: "textImage";
          data: TextImageProps;
      }
    | {
          pianistType: "fullPageSlider";
          data: FullPageSliderProps["content"];
      }
    | {
          pianistType: "ParallaxImage";
          data: ParallaxImageProps;
      };

export const Pianist: FC<PianistProps> = ({ pianistType: pianistType, data, ...rest }) => {
    /*
     * content can be passed as children or as content prop
     * if content is passed as children, it will be used as content
     * if content is passed as content prop, it will be used as content via custom html
     */
    if (!data) {
        return null;
    }

    let PianistTypeOutput;
    switch (pianistType) {
        case "textImage":
            PianistTypeOutput = (
                <TextImage {...(data as TextImageProps)} {...rest} />
            );
            break;
        case "fullPageSlider":
            PianistTypeOutput = (
                <FullPageSlider
                    content={data as FullPageSliderProps["content"]}
                    {...rest}
                />
            );
            break;
        case "ParallaxImage":
            PianistTypeOutput = (
                <ParallaxImage {...(data as ParallaxImageProps)} {...rest} />
            );
    }

    const isFullWidth =
        pianistType === "fullPageSlider" || pianistType === "ParallaxImage";

    return (
        <S.PianistWrapper $isFullWidth={isFullWidth}>
            {PianistTypeOutput}
        </S.PianistWrapper>
    );
};
