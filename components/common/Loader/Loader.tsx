import React, {FC} from 'react';
import * as Styled from './Loader.styles';

type LoaderProps = {
    loadingText?: string;
};

const defaultProps = {
    loadingText: undefined,
};

const Loader: FC<LoaderProps> = ({loadingText, ...props}) => (
    <Styled.Container {...props}>
        <Styled.Loader />
        {loadingText && <Styled.LoadingText>{loadingText}</Styled.LoadingText>}
    </Styled.Container>
);

Loader.defaultProps = defaultProps;

export default Loader;
