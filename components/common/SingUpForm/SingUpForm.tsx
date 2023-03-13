import React, {useContext} from 'react';
import {useTranslation} from 'next-i18next';
import Select from '@/components/common/Select/Select';
import Input from '@/components/common/Input/Input';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import urls from '@/utils/urls';
import {ChevronRight} from '@mui/icons-material';
import * as Yup from 'yup';
import {phoneRegExp} from '@/utils/utils';
import {AppContext} from '@/context/AppContext';
import {AlertMessagesTypes} from '@/utils/commonEnums';
import {sendSignUpEmail} from '@/lib/fetchStrapi';
import * as CommonStyled from '@/styles/commonStyles';
import * as Styled from './SignUpForm.styles';

type SignUpFormValues = {
    email: string;
    phoneNumber: string;
    name: string;
    yearOfBirth: string;
    localization: string;
    chooseActivities: string;
    iKnowAboutTheAcademy: string;
    otherLocalization: string;
    additionalInfo: string;
    regulations: boolean;
};

const SingUpForm = () => {
    const {t} = useTranslation();
    const {handleSetMessageBox} = useContext(AppContext);
    const {clubRegulations, membershipDeclaration, frequentlyAskedQuestions} =
        urls;

    const localizationsOptions = [
        {
            id: 'rataje',
            label: t('forms.localizationsOptions.rataje'),
            value: 'rataje',
        },
        {
            id: 'lubon',
            label: t('forms.localizationsOptions.lubon'),
            value: 'lubon',
        },
        {
            id: 'wiry',
            label: t('forms.localizationsOptions.wiry'),
            value: 'wiry',
        },
        {
            id: 'debiec',
            label: t('forms.localizationsOptions.debiec'),
            value: 'debiec',
        },
        {
            id: 'winogrady',
            label: t('forms.localizationsOptions.winogrady'),
            value: 'winogrady',
        },
        {
            id: 'piatkowo',
            label: t('forms.localizationsOptions.piatkowo'),
            value: 'piatkowo',
        },
        {
            id: 'naramowice',
            label: t('forms.localizationsOptions.naramowice'),
            value: 'naramowice',
        },
        {
            id: 'grunwald',
            label: t('forms.localizationsOptions.grunwald'),
            value: 'grunwald',
        },
        {
            id: 'plewiska',
            label: t('forms.localizationsOptions.plewiska'),
            value: 'plewiska',
        },
        {
            id: 'komorniki',
            label: t('forms.localizationsOptions.komorniki'),
            value: 'komorniki',
        },
        {
            id: 'mosina',
            label: t('forms.localizationsOptions.mosina'),
            value: 'mosina',
        },

        {
            id: 'wronki',
            label: t('forms.localizationsOptions.wronki'),
            value: 'wronki',
        },
        {
            id: 'treningiIndywidualne',
            label: t('forms.localizationsOptions.treningiIndywidualne'),
            value: 'treningiIndywidualne',
        },
        {
            id: 'other',
            label: t('forms.localizationsOptions.other'),
            value: 'other',
        },
    ];

    const defaultValues: SignUpFormValues = {
        email: '',
        phoneNumber: '',
        name: '',
        yearOfBirth: '',
        localization: '',
        chooseActivities: '',
        iKnowAboutTheAcademy: '',
        otherLocalization: '',
        additionalInfo: '',
        regulations: false,
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .required(t<string>('forms.emailIsRequiredError'))
            .email(t<string>('forms.emailIsNotCorrectError')),
        phoneNumber: Yup.string()
            .required(t<string>('forms.phoneNumberIsRequiredError'))
            .matches(
                phoneRegExp,
                t<string>('forms.phoneNumberIsNotCorrectError')
            ),
        name: Yup.string().required(t<string>('forms.nameIsRequiredError')),
        yearOfBirth: Yup.number()
            .required(t<string>('forms.yearOfBirthIsRequiredError'))
            .typeError(t<string>('forms.yearOfBirthIsInvalidError')),
        localization: Yup.string().required(
            t<string>('forms.localizationIsRequiredError')
        ),
        otherLocalization: Yup.string().when('localization', {
            is: 'other',
            then: Yup.string().required(
                'forms.otherLocalizationIsRequiredError'
            ),
        }),
        regulations: Yup.boolean().oneOf(
            [true],
            t<string>('forms.regulationsIsRequiredError')
        ),
    });

    const {
        control,
        handleSubmit,
        getValues,
        watch,
        formState: {errors: formErrors, isSubmitting},
        reset,
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const watchShowOtherLocalization = watch('localization', '');

    const handleSendEmail = async (values: SignUpFormValues) => {
        const {
            email,
            phoneNumber,
            name,
            yearOfBirth,
            localization,
            otherLocalization,
            additionalInfo,
        } = values;
        const preparedData = {
            email,
            phoneNumber,
            name,
            yearOfBirth,
            localization:
                localization === 'other'
                    ? otherLocalization
                    : t(`forms.localizationsOptions.${localization}`),
            additionalInfo,
        };

        const res = await sendSignUpEmail(preparedData);
        if (res.ok || res.status === 200) {
            handleSetMessageBox({
                id: 'sentMail',
                text: t('alerts.sendEmailOk'),
                type: AlertMessagesTypes.SUCCESS,
            });
        } else {
            handleSetMessageBox({
                id: 'sentMail',
                text: t('alerts.sendEmailError'),
                type: AlertMessagesTypes.ERROR,
            });
        }

        reset();
    };

    return (
        <Styled.SignUpForm onSubmit={handleSubmit(handleSendEmail)}>
            <Styled.SignUpFormWrapper>
                <CommonStyled.FormInput>
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
                </CommonStyled.FormInput>
                <CommonStyled.FormInput>
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
                </CommonStyled.FormInput>
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <CommonStyled.FormInput>
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
                </CommonStyled.FormInput>
                <CommonStyled.FormInput>
                    <Controller
                        name="yearOfBirth"
                        control={control}
                        defaultValue={defaultValues.yearOfBirth}
                        render={({field}) => (
                            <Input
                                id="yearOfBirth"
                                type="text"
                                label={`${t('forms.yearOfBirthLabel')}*`}
                                error={!!formErrors?.yearOfBirth}
                                helperText={formErrors?.yearOfBirth?.message}
                                {...field}
                            />
                        )}
                    />
                </CommonStyled.FormInput>
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <CommonStyled.FormInput>
                    <Controller
                        name="localization"
                        control={control}
                        defaultValue={defaultValues.localization}
                        render={({field: {onChange, ...field}}) => (
                            <Select
                                labelId="localization"
                                id="localization"
                                selectLabel={`${t('forms.localizationLabel')}*`}
                                inputLabel={`${t('forms.localizationLabel')}*`}
                                onChangeHandler={onChange}
                                options={localizationsOptions}
                                {...field}
                                error={!!formErrors?.localization}
                                helperText={formErrors?.localization?.message}
                            />
                        )}
                    />
                </CommonStyled.FormInput>
                {watchShowOtherLocalization === 'other' && (
                    <CommonStyled.FormInput>
                        <Controller
                            name="otherLocalization"
                            control={control}
                            defaultValue={defaultValues.otherLocalization}
                            render={({field}) => (
                                <Input
                                    id="otherLocalization"
                                    type="text"
                                    label={`${t(
                                        'forms.otherLocalizationLabel'
                                    )}*`}
                                    error={!!formErrors?.otherLocalization}
                                    helperText={
                                        formErrors?.otherLocalization?.message
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </CommonStyled.FormInput>
                )}
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <CommonStyled.FormInput textarea>
                    <Controller
                        name="additionalInfo"
                        control={control}
                        defaultValue={defaultValues.additionalInfo}
                        render={({field}) => (
                            <Input
                                id="additionalInfo"
                                type="text"
                                label={t('forms.additionalInfoLabel')}
                                multiline
                                rows={4}
                                {...field}
                                error={!!formErrors?.additionalInfo}
                                helperText={formErrors?.additionalInfo?.message}
                            />
                        )}
                    />
                </CommonStyled.FormInput>
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <Controller
                    name="regulations"
                    control={control}
                    defaultValue={defaultValues.regulations}
                    render={({field: {onChange, ...field}}) => (
                        <Styled.RegulationsCheckboxLabel
                            id="regulations"
                            label={
                                <>
                                    <span>
                                        {t('forms.regulationsLabelPartOne')}{' '}
                                    </span>
                                    <Styled.RegulationsLink
                                        href={clubRegulations}
                                    >
                                        {t('regulations')}
                                    </Styled.RegulationsLink>
                                    <span>
                                        {t('forms.regulationsLabelPartTwo')}{' '}
                                    </span>
                                    <Styled.RegulationsLink
                                        href={membershipDeclaration}
                                    >
                                        {t('forms.regulationsLabelPartThree')}
                                    </Styled.RegulationsLink>
                                    *
                                </>
                            }
                            isChecked={getValues('regulations')}
                            onClickHandler={() =>
                                onChange(!getValues('regulations'))
                            }
                            {...field}
                            error={!!formErrors?.regulations}
                            errorText={formErrors?.regulations?.message}
                        />
                    )}
                />
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <Styled.RequiredTextInfo>
                    {t('forms.requiredTextInfo')}
                </Styled.RequiredTextInfo>
            </Styled.SignUpFormWrapper>
            <Styled.SubmitButton
                variant="OUTLINED"
                loading={isSubmitting}
                disabled={isSubmitting}
                iconEnd={<ChevronRight />}
                type="submit"
            >
                {t('send')}
            </Styled.SubmitButton>
            <Styled.QuestionText>
                {t('forms.questionText')}{' '}
                <Styled.RegulationsLink href={frequentlyAskedQuestions}>
                    {t('forms.questionTextLink')}
                </Styled.RegulationsLink>
            </Styled.QuestionText>
        </Styled.SignUpForm>
    );
};

export default SingUpForm;
