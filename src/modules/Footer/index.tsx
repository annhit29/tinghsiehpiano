import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <Logo />
                    <S.FooterContent>
                        <p>
                            © 2024 All rights reserved by {" "}
                            <a href="https://www.linkedin.com/in/wei-en-hsieh-23397322b/" target="_blank" rel="noopener noreferrer">Wei-En Hsieh</a>
                            {" "}
                            <a href="https://github.com/annhit29" target="_blank" rel="noopener noreferrer">(annhit29)</a>
                        </p>
                    </S.FooterContent>
                </S.FooterContainer>

                <Socials />
            </Container>
        </S.FooterStyled>
    );
};
