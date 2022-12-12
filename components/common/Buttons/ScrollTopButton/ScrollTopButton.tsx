import React, {FC} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as Styled from './ScrollTopButton.styles';

const ScrollTopButton: FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <Styled.ScrollTopButton onClick={handleScrollToTop}>
            <KeyboardArrowUpIcon fontSize="large" />
        </Styled.ScrollTopButton>
    );
};

export default ScrollTopButton;
