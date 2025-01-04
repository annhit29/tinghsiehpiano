import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

// Biography component is for biography.astro

export const Biography: FC = () => {
    return (
        <S.BiographyStyled>
            <S.ContainerStyled>
                {/* <FadeIn> FadeIn 0 seconds by default (see its source code) */}
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Taiwanese pianist Wei-Ting Hsieh</h3>
                        
                        <S.BiographyParagraph>Pianist Wei-Ting Hsieh was born in 1996 in Taipei, Taiwan. She learned to play the piano at the age of four. 
                            Wei-Ting Hsieh studied with Chin-Chuan Chang in Taiwan. She studied with Michel Beroff, Laurent Cabasso, and Marie-Josèphe Jude at the Conservatoire National Supérieur de Musique et de Danse de Paris, and later with Arie Vardi in Germany. 
                            She is currently a professor in the music department of the National Taipei University of Education.
                        </S.BiographyParagraph>
                        <S.BiographyParagraph>Wei-Ting Hsieh won the second prize in the Ettlingen International Competition in Germany in 2014. 
                            She won the first prize in the Concours Virtuoses du Coeur in France in 2015. She was a
                            semi-finalist in the Concours Long Thibaud Crespin in France in 2015.
                            She won the first prize in the Windsor International Piano Competition in 2017 and published
                            her debut album in 2018 with KNS Classical Label Recording.<br />
                            Wei-Ting Hsieh was selected as one of the twenty-four competitors in the Leeds Piano Competition 2018.
                            She won the Silver Medal in Manhattan International Music Competition in 2019. In
                            2019, she also won the first prize in Montecatini Piano Competition and became a
                            semi-finalist in the Concours Long Thibaud Crespin. In 2021, she was selected for the
                            XVIII International Chopin Piano Competition and advanced to the second round. In
                            2022, she won the third prize in the International Livorno Piano Competition.
                        </S.BiographyParagraph>
                        <S.BiographyParagraph>Wei-Ting Hsieh has given recitals, chamber music and concerto concerts in France, Germany, Italy,
                            Spain, and many countries in Asia. She has performed in many prestigious venues such
                            as Salle Gaveau, Salle Cortot, Laeiszhalle, Filharmonia Narodowa Warszawie,
                            Chateau de Bagatelle, Marina Bay Sands Theatre, National Taiwan Concert Hall,
                            National Kaohsiung Center for the Arts, and National Taichung Theater. She
                            has performed in many festivals such as the 15th Steinway Piano Festival in Hamburg,
                            the 32e Festival Chopin à Paris &quot;Piano à Portes ouvertes&quot;, the NTUE International
                            Piano Festival in Taiwan, the festival of L’Académie Ravel, and also the live
                            broadcast program of France Musique, Festival du Vexin in France and Venice, 
                            and the festival La Folle Journée in Nantes.<br />
                            Wei-Ting Hsieh has also worked with many renowned musicians such as Quatuor Hermès,
                            Orchestre Symphnique du Pays Basque, Orchestre des Lauréats du Conservatoire,
                            Quentin Hindley, Maria Belooussova, Itamar Golan, Michael Hentz, and François Salque.
                        </S.BiographyParagraph>
                    </TextBox>
                {/* </FadeIn> */}
            </S.ContainerStyled>
        </S.BiographyStyled>
    );
};
