import {useTranslation} from 'next-i18next';
import React, {FC} from 'react';
import * as Yup from 'yup';
import {phoneRegExp} from '@/utils/utils';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Input from '@/components/common/Input/Input';
import {ChevronRight} from '@mui/icons-material';
import * as Styled from './ShopCartForm.styles';

type ShopCartFormValues = {
    email: string;
    phoneNumber: string;
    name: string;
    localization: string;
    trainingLocation: string;
};

type ShopCartFormProps = {
    onSendOrderHandler: (values: ShopCartFormValues) => void;
    shopCartFormDisabled: boolean;
};

const ShopCartForm: FC<ShopCartFormProps> = ({
    onSendOrderHandler,
    shopCartFormDisabled,
}) => {
    const {t} = useTranslation();
    const defaultValues: ShopCartFormValues = {
        email: '',
        phoneNumber: '',
        name: '',
        localization: '',
        trainingLocation: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required(t<string>('forms.nameIsRequiredError')),
        email: Yup.string()
            .required(t<string>('forms.emailIsRequiredError'))
            .email(t<string>('forms.emailIsNotCorrectError')),
        phoneNumber: Yup.string()
            .required(t<string>('forms.phoneNumberIsRequiredError'))
            .matches(
                phoneRegExp,
                t<string>('forms.phoneNumberIsNotCorrectError')
            ),

        localization: Yup.string().required(
            t<string>('forms.deliveryAddressIsRequiredError')
        ),
        trainingLocation: Yup.string().required(
            t<string>('forms.trainingLocationAddressIsRequiredError')
        ),
    });
    const {
        control,
        handleSubmit,
        formState: {errors: formErrors, isSubmitting},
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    return (
        <Styled.ShopCartForm onSubmit={handleSubmit(onSendOrderHandler)}>
            <Styled.FormTitle belt={false}>
                {t('shopCart.formSubtitle')}
            </Styled.FormTitle>
            <Styled.FormInput>
                <Controller
                    name="name"
                    control={control}
                    defaultValue={defaultValues.name}
                    render={({field}) => (
                        <Input
                            id="name"
                            type="text"
                            label={`${t('forms.nameLabel')}*`}
                            error={!!formErrors?.name}
                            helperText={formErrors?.name?.message}
                            {...field}
                        />
                    )}
                />
            </Styled.FormInput>
            <Styled.FormInput>
                <Controller
                    name="email"
                    control={control}
                    defaultValue={defaultValues.email}
                    render={({field}) => (
                        <Input
                            id="email"
                            type="text"
                            label={`${t('forms.emailLabel')}*`}
                            error={!!formErrors?.email}
                            helperText={formErrors?.email?.message}
                            {...field}
                        />
                    )}
                />
            </Styled.FormInput>
            <Styled.FormInput>
                <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue={defaultValues.phoneNumber}
                    render={({field}) => (
                        <Input
                            id="phoneNumber"
                            type="text"
                            label={`${t('forms.phoneNumberLabel')}*`}
                            error={!!formErrors?.phoneNumber}
                            helperText={formErrors?.phoneNumber?.message}
                            {...field}
                        />
                    )}
                />
            </Styled.FormInput>
            <Styled.FormInput>
                <Controller
                    name="localization"
                    control={control}
                    defaultValue={defaultValues.localization}
                    render={({field}) => (
                        <Input
                            id="localization"
                            type="text"
                            label={`${t('forms.deliveryAddressLabel')}*`}
                            error={!!formErrors?.localization}
                            helperText={formErrors?.localization?.message}
                            {...field}
                        />
                    )}
                />
            </Styled.FormInput>
            <Styled.FormInput>
                <Controller
                    name="trainingLocation"
                    control={control}
                    defaultValue={defaultValues.trainingLocation}
                    render={({field}) => (
                        <Input
                            id="trainingLocation"
                            type="text"
                            label={`${t('forms.trainingLocationLabel')}*`}
                            error={!!formErrors?.trainingLocation}
                            helperText={formErrors?.trainingLocation?.message}
                            {...field}
                        />
                    )}
                />
            </Styled.FormInput>
            <Styled.SubmitButton
                variant="OUTLINED"
                loading={isSubmitting}
                disabled={isSubmitting || shopCartFormDisabled}
                iconEnd={<ChevronRight />}
                type="submit"
            >
                {t('forms.sendOrder')}
            </Styled.SubmitButton>
        </Styled.ShopCartForm>
    );
};

export default ShopCartForm;
