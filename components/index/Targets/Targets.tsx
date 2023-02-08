import {useTranslation} from 'next-i18next';
import React from 'react';
import * as CommonStyled from '@/styles/commonStyles';
import approach from '@/assets/index/index-targets-approach.jpg';
import training from '@/assets/index/index-targets-training.jpg';
import motivation from '@/assets/index/index-targets-motivation.jpg';
import continuity from '@/assets/index/index-targets-continuity.jpg';
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
            id: 'approach',
            title: t<string>('index:targets.approachTitle'),
            content: t<string>('index:targets.approachContent'),
            image: approach?.src || '',
        },

        {
            id: 'continuity',
            title: t<string>('index:targets.continuityTitle'),
            content: t<string>('index:targets.continuityContent'),
            image: continuity?.src || '',
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
