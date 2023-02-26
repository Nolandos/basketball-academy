import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';

export const MobileProductsList = styled.ul`
    padding: 0 15px;
    margin: 0;
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
`;

export const MobileProductsListItem = styled.li`
    width: 100%;
    min-height: 50px;
    margin: 25px 0;
`;

export const ListItemRow = styled.div`
    width: 100%;
    padding: 5px;
    border-bottom: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `1px solid ${primaryGreen}`};

    &:first-child {
        padding: 7px;
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
        color: white;
    }

    &.total-row {
        display: flex;
        justify-content: space-around;
    }

    .additional-info-row {
        margin: 3px 0;
    }
`;

export const DeleteButton = styled(Button)`
    padding: 7px 12px;
    min-width: 0;
    min-height: 0;
`;

export const NoProductsInfo = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;

    > svg {
        margin-right: 10px;
    }
`;
