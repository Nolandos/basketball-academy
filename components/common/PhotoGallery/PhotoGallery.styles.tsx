import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 15px 0;
`;

export const CustomPhoto = styled.div`
    padding: 2px;
    cursor: pointer;
    display: flex;
    position: relative;

    &:after {
        font-family: 'Material Icons';
        content: 'zoom_in';
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        position: absolute;
        background-color: rgba(34, 31, 27, 0.4);
        left: 2px;
        top: 2px;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.7rem;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }

    &:hover {
        &:after {
            opacity: 1;
            transition: opacity 0.6s;
        }
    }
`;
