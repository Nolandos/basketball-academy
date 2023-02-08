import {useTranslation} from 'next-i18next';
import {EventAvailable, Groups, Room, Sports} from '@mui/icons-material';
import React, {useEffect, useRef} from 'react';
import constants from '@/utils/constants';
import * as Styled from './AcademyNumbers.styles';

const {
    academyNumbersFields: {
        players: playersValue,
        places: placesValue,
        years: yearsValue,
        trainers: trainersValue,
    },
} = constants;

const AcademyNumbers = () => {
    const {t} = useTranslation();
    const playersRef = useRef(null);
    const placesRef = useRef(null);
    const yearsRef = useRef(null);
    const trainersRef = useRef(null);
    const numbersRef = useRef(null);

    const counterAnimation = (
        refsArr: {
            ref: HTMLElement;
            refValue: number;
        }[]
    ) => {
        const interval = 700;
        const minValue = Math.min(...refsArr.map((o) => o.refValue));

        let first = true;
        window.addEventListener('scroll', () => {
            const numbersRefCurrent =
                numbersRef.current as unknown as HTMLElement;
            if (numbersRefCurrent) {
                const {top} = numbersRefCurrent.getBoundingClientRect();
                if (top < window.innerHeight - 150 && first) {
                    first = false;
                    refsArr.forEach(({ref, refValue}) => {
                        if (ref) {
                            let startValue = refValue - minValue;
                            const endValue = refValue;
                            const duration = Math.floor(interval / minValue);
                            const counter = setInterval(() => {
                                startValue += 1;
                                ref.innerText = `${startValue}`;
                                if (startValue === endValue)
                                    clearInterval(counter);
                            }, duration);
                        }
                    });
                }
            }
        });
    };

    useEffect(() => {
        if (playersRef.current) {
            if (playersRef)
                counterAnimation([
                    {
                        ref: playersRef.current as unknown as HTMLElement,
                        refValue: playersValue,
                    },
                    {
                        ref: placesRef.current as unknown as HTMLElement,
                        refValue: placesValue,
                    },
                    {
                        ref: yearsRef.current as unknown as HTMLElement,
                        refValue: yearsValue,
                    },
                    {
                        ref: trainersRef.current as unknown as HTMLElement,
                        refValue: trainersValue,
                    },
                ]);
        }
    }, []);
    return (
        <Styled.NumbersContainer>
            <Styled.Numbers ref={numbersRef}>
                <Groups />
                <h3 ref={playersRef}>{playersValue}</h3>
                <p>{t<string>('index:academyNumbers.players')}</p>
            </Styled.Numbers>
            <Styled.Numbers>
                <Room />
                <h3 ref={placesRef}>{placesValue}</h3>
                <p>{t<string>('index:academyNumbers.places')}</p>
            </Styled.Numbers>
            <Styled.Numbers>
                <EventAvailable />
                <h3 ref={yearsRef}>{yearsValue}</h3>
                <p>{t<string>('index:academyNumbers.years')}</p>
            </Styled.Numbers>
            <Styled.Numbers>
                <Sports />
                <h3 ref={trainersRef}>{trainersValue}</h3>
                <p>{t<string>('index:academyNumbers.trainers')}</p>
            </Styled.Numbers>
        </Styled.NumbersContainer>
    );
};

export default AcademyNumbers;
