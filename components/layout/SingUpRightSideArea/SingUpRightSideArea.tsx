import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import {ChevronRight, Close, Edit} from '@mui/icons-material';
import {ClickAwayListener} from '@mui/base';
import SingUpForm from '@/components/common/SingUpForm/SingUpForm';
import * as CommonStyled from '@/styles/commonStyles';
import * as Styled from './SingUpRightSideArea.styles';

type SignUpRightSideAreaProps = {
    isOpen: boolean;
    onCloseHandler: () => void;
    onOpenHandler: () => void;
};

const SingUpRightSideArea: FC<SignUpRightSideAreaProps> = ({
    isOpen,
    onOpenHandler,
    onCloseHandler,
}) => {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const handleCheckIsMobile: () => void = () => {
        if (window.innerWidth > 1080) setIsMobile(false);
        else setIsMobile(true);
    };
    useEffect(() => {
        handleCheckIsMobile();
        window.addEventListener('resize', handleCheckIsMobile);
        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, []);

    return (
        <ClickAwayListener
            onClickAway={(e) => {
                const target = e.target as HTMLTextAreaElement;
                if (target.tagName !== 'BODY') onCloseHandler();
            }}
        >
            <Styled.SingUpRightSideArea isOpen={isOpen}>
                {!isOpen && (
                    <Styled.SingUpRightSideAreaButton
                        isOpen={isOpen}
                        onClickHandler={onOpenHandler}
                        iconStart={<Edit />}
                    >
                        <span>{t<string>('signUp')}</span>
                    </Styled.SingUpRightSideAreaButton>
                )}
                {!isMobile && isOpen && (
                    <Styled.SingUpRightSideAreaButton
                        isOpen={isOpen}
                        onClickHandler={onCloseHandler}
                        iconEnd={<ChevronRight />}
                    >
                        <span />
                    </Styled.SingUpRightSideAreaButton>
                )}
                {isMobile && isOpen && (
                    <Styled.SingUpRightSideAreaMobileButton
                        variant="OUTLINED"
                        onClickHandler={onCloseHandler}
                    >
                        <Close />
                    </Styled.SingUpRightSideAreaMobileButton>
                )}
                <CommonStyled.SectionSubtitle belt>
                    {t<string>('signUp')}
                </CommonStyled.SectionSubtitle>
                <SingUpForm />
            </Styled.SingUpRightSideArea>
        </ClickAwayListener>
    );
};

export default SingUpRightSideArea;
