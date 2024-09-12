import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
// import i18next, { t, changeLanguage } from "i18next"; // Import i18next for translations

// changeLanguage("en");


// import { useTranslation } from 'react-i18next'; // Import translation hook

// Contact component is for contact.astro

export const Contact: FC = () => {

    // const { t } = useTranslation(); // Initialize translation

    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={false}
                            // boxAsLink={true}
                            // href="mailto:youremail@gmail.com"
                            target="_blank"
                        >
                            <h3>Email</h3>
                            <p>
                                ting61141@gmail.com
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                    <TextBox variant="background-text" bgText="Address">
                        {/* <h3>{t("contact.index.address.title")}</h3> */}
                        <h3>Address</h3>

                        {/* <p>{t("contact.index.address.paragraph")}</p> */}
                        <p>Office: No. 134, Ho-ping East Rd., Sec. 2, Daan District, Taipei City 10671, Taiwan</p>
                    </TextBox>
                    </FadeIn>
                    {/* <FadeIn delay={0.3}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 123 233 421"
                            target="_blank"
                        >
                            <h3>+52 123 233 421</h3>
                            <p>
                                you can call me if you have any questions or
                                just want to say hi
                            </p>
                        </TextBox>
                    </FadeIn> */}
                </S.ContactBox>
                {/* <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        
                        <p>Some street 123, 12345 City, Country</p>
                        <p>Office: No. 134, Ho-ping East Rd., Sec. 2, Daan District, Taipei City 10671, Taiwan</p>
                    </TextBox>
                </FadeIn> */}
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
