import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    {/* <li>
                        <a
                            href="https://www.instagram.com/ting61141/"
                            target="_blank"
                        >
                            Social Media
                        </a>
                    </li> */}
                    <li>
                        <a href="/calendar">Calendar</a>
                    </li>
                    <li>
                        <a href="/music">Music</a>
                    </li>
                    <li>
                        <a href="/biography">Biography</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
