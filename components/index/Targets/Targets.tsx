import {useTranslation} from 'next-i18next';
import React from 'react';
import * as CommonStyled from '@/styles/commonStyles';
import preparation from '@/assets/index/index-targets-preparation.png';
import training from '@/assets/index/index-targets-training.png';
import motivation from '@/assets/index/index-targets-motivation.png';
import realization from '@/assets/index/index-targets-realization.png';
import * as Styled from './Targets.styles';

type TargetItem = {
    id: string;
    title: string;
    content: string;
    image: string;
};
const Targets = () => {
    const {t} = useTranslation();
    const targetsArray: TargetItem[] = [
        {
            id: 'preparation',
            title: t<string>('index:targets.preparationTitle'),
            content: t<string>('index:targets.preparationContent'),
            image: preparation?.src || '',
        },
        {
            id: 'training',
            title: t<string>('index:targets.trainingTitle'),
            content: t<string>('index:targets.trainingContent'),
            image: training?.src || '',
        },
        {
            id: 'motivation',
            title: t<string>('index:targets.motivationTitle'),
            content: t<string>('index:targets.motivationContent'),
            image: motivation?.src || '',
        },
        {
            id: 'realization',
            title: t<string>('index:targets.realizationTitle'),
            content: t<string>('index:targets.realizationContent'),
            image: realization?.src || '',
        },
    ];
    return (
        <CommonStyled.Container>
            <Styled.Targets>
                {targetsArray.map(({id, title, content, image}, index) => (
                    <Styled.TargetItem key={id}>
                        <Styled.TargetImageContent>
                            <Styled.TargetImage backgroundImg={image}>
                                <span>{index + 1}.</span>
                            </Styled.TargetImage>
                        </Styled.TargetImageContent>
                        <Styled.TargetTitle>{title}</Styled.TargetTitle>
                        <Styled.TargetContent>{content}</Styled.TargetContent>
                    </Styled.TargetItem>
                ))}
            </Styled.Targets>
        </CommonStyled.Container>
    );
};

export default Targets;
