import styled from 'styled-components';

export const DocumentsList = styled.ul`
    padding: 0;
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DocumentItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 10px;

    > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > p {
            font-size: 1.15rem;
        }
    }
`;

export const PDFThumbnail = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;

    .rpv-core__inner-pages {
        overflow: hidden;
    }
`;
