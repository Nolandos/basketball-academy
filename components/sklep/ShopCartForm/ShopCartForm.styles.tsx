import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import Button from '@/components/common/Buttons/Button/Button';
import device from '@/styles/breakpoints';

const {mobile} = device;

export const ShopCartForm = styled.form`
    width: 100%;
    max-width: 600px;
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const FormInput = styled(CommonStyled.FormInput)`
    margin: 10px 0;
    width: 100%;
`;

export const FormTitle = styled(CommonStyled.SectionSubtitle)`
    margin-bottom: 7px;
`;

export const SubmitButton = styled(Button)`
    margin-left: auto;
    margin-right: 15px;
    @media ${mobile} {
        margin-top: 25px;
    }
`;
