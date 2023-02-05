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
            label: t('signUpForm.localizationsOptions.rataje'),
            value: 'rataje',
        },
        {
            id: 'lubon',
            label: t('signUpForm.localizationsOptions.lubon'),
            value: 'lubon',
        },
        {
            id: 'wiry',
            label: t('signUpForm.localizationsOptions.wiry'),
            value: 'wiry',
        },
        {
            id: 'debiec',
            label: t('signUpForm.localizationsOptions.debiec'),
            value: 'debiec',
        },
        {
            id: 'winogrady',
            label: t('signUpForm.localizationsOptions.winogrady'),
            value: 'winogrady',
        },
        {
            id: 'piatkowo',
            label: t('signUpForm.localizationsOptions.piatkowo'),
            value: 'piatkowo',
        },
        {
            id: 'naramowice',
            label: t('signUpForm.localizationsOptions.naramowice'),
            value: 'naramowice',
        },
        {
            id: 'grunwald',
            label: t('signUpForm.localizationsOptions.grunwald'),
            value: 'grunwald',
        },
        {
            id: 'wronki',
            label: t('signUpForm.localizationsOptions.wronki'),
            value: 'wronki',
        },
        {
            id: 'other',
            label: t('signUpForm.localizationsOptions.other'),
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
            .required(t<string>('signUpForm.emailIsRequiredError'))
            .email(t<string>('signUpForm.emailIsNotCorrectError')),
        phoneNumber: Yup.string()
            .required(t<string>('signUpForm.phoneNumberIsRequiredError'))
            .matches(
                phoneRegExp,
                t<string>('signUpForm.phoneNumberIsNotCorrectError')
            ),
        name: Yup.string().required(
            t<string>('signUpForm.nameIsRequiredError')
        ),
        yearOfBirth: Yup.number()
            .required(t<string>('signUpForm.yearOfBirthIsRequiredError'))
            .typeError(t<string>('signUpForm.yearOfBirthIsInvalidError')),
        localization: Yup.string().required(
            t<string>('signUpForm.localizationIsRequiredError')
        ),
        otherLocalization: Yup.string().when('localization', {
            is: 'other',
            then: Yup.string().required(
                'signUpForm.otherLocalizationIsRequiredError'
            ),
        }),
        regulations: Yup.boolean().oneOf(
            [true],
            t<string>('signUpForm.regulationsIsRequiredError')
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

    const handleSendEmail = (values: SignUpFormValues) => {
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
                    : t(`signUpForm.localizationsOptions.${localization}`),
            additionalInfo,
        };

        return new Promise<void>((resolve) => {
            setTimeout(() => {
                handleSetMessageBox({
                    id: 'sentMail',
                    text: 'Wysłano wiadomość!',
                    type: AlertMessagesTypes.SUCCESS,
                });
                reset(defaultValues);
                resolve();
            }, 2000);
        });
    };

    return (
        <Styled.SignUpForm onSubmit={handleSubmit(handleSendEmail)}>
            <Styled.SignUpFormWrapper>
                <Styled.SignUpFormInput>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={defaultValues.email}
                        render={({field}) => (
                            <Input
                                id="email"
                                type="text"
                                label={`${t('signUpForm.emailLabel')}*`}
                                error={!!formErrors?.email}
                                helperText={formErrors?.email?.message}
                                {...field}
                            />
                        )}
                    />
                </Styled.SignUpFormInput>
                <Styled.SignUpFormInput>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue={defaultValues.phoneNumber}
                        render={({field}) => (
                            <Input
                                id="phoneNumber"
                                type="text"
                                label={`${t('signUpForm.phoneNumberLabel')}*`}
                                error={!!formErrors?.phoneNumber}
                                helperText={formErrors?.phoneNumber?.message}
                                {...field}
                            />
                        )}
                    />
                </Styled.SignUpFormInput>
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <Styled.SignUpFormInput>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={defaultValues.name}
                        render={({field}) => (
                            <Input
                                id="name"
                                type="text"
                                label={`${t('signUpForm.nameLabel')}*`}
                                error={!!formErrors?.name}
                                helperText={formErrors?.name?.message}
                                {...field}
                            />
                        )}
                    />
                </Styled.SignUpFormInput>
                <Styled.SignUpFormInput>
                    <Controller
                        name="yearOfBirth"
                        control={control}
                        defaultValue={defaultValues.yearOfBirth}
                        render={({field}) => (
                            <Input
                                id="yearOfBirth"
                                type="text"
                                label={`${t('signUpForm.yearOfBirthLabel')}*`}
                                error={!!formErrors?.yearOfBirth}
                                helperText={formErrors?.yearOfBirth?.message}
                                {...field}
                            />
                        )}
                    />
                </Styled.SignUpFormInput>
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <Styled.SignUpFormInput>
                    <Controller
                        name="localization"
                        control={control}
                        defaultValue={defaultValues.localization}
                        render={({field: {onChange, ...field}}) => (
                            <Select
                                labelId="localization"
                                id="localization"
                                selectLabel={`${t(
                                    'signUpForm.localizationLabel'
                                )}*`}
                                inputLabel={`${t(
                                    'signUpForm.localizationLabel'
                                )}*`}
                                onChangeHandler={onChange}
                                options={localizationsOptions}
                                {...field}
                                error={!!formErrors?.localization}
                                helperText={formErrors?.localization?.message}
                            />
                        )}
                    />
                </Styled.SignUpFormInput>
                {watchShowOtherLocalization === 'other' && (
                    <Styled.SignUpFormInput>
                        <Controller
                            name="otherLocalization"
                            control={control}
                            defaultValue={defaultValues.otherLocalization}
                            render={({field}) => (
                                <Input
                                    id="otherLocalization"
                                    type="text"
                                    label={`${t(
                                        'signUpForm.otherLocalizationLabel'
                                    )}*`}
                                    error={!!formErrors?.otherLocalization}
                                    helperText={
                                        formErrors?.otherLocalization?.message
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </Styled.SignUpFormInput>
                )}
            </Styled.SignUpFormWrapper>
            <Styled.SignUpFormWrapper>
                <Styled.SignUpFormInput textarea>
                    <Controller
                        name="additionalInfo"
                        control={control}
                        defaultValue={defaultValues.additionalInfo}
                        render={({field}) => (
                            <Input
                                id="additionalInfo"
                                type="text"
                                label={t('signUpForm.additionalInfoLabel')}
                                multiline
                                rows={4}
                                {...field}
                                error={!!formErrors?.additionalInfo}
                                helperText={formErrors?.additionalInfo?.message}
                            />
                        )}
                    />
                </Styled.SignUpFormInput>
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
                                        {t(
                                            'signUpForm.regulationsLabelPartOne'
                                        )}{' '}
                                    </span>
                                    <Styled.RegulationsLink
                                        href={clubRegulations}
                                    >
                                        {t('regulations')}
                                    </Styled.RegulationsLink>
                                    <span>
                                        {t(
                                            'signUpForm.regulationsLabelPartTwo'
                                        )}{' '}
                                    </span>
                                    <Styled.RegulationsLink
                                        href={membershipDeclaration}
                                    >
                                        {t(
                                            'signUpForm.regulationsLabelPartThree'
                                        )}
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
                    {t('signUpForm.requiredTextInfo')}
                </Styled.RequiredTextInfo>
            </Styled.SignUpFormWrapper>
            <Styled.SubmitButton
                variant="OUTLINED"
                loading={isSubmitting}
                iconEnd={<ChevronRight />}
                type="submit"
            >
                {t('send')}
            </Styled.SubmitButton>
            <Styled.QuestionText>
                {t('signUpForm.questionText')}{' '}
                <Styled.RegulationsLink href={frequentlyAskedQuestions}>
                    {t('signUpForm.questionTextLink')}
                </Styled.RegulationsLink>
            </Styled.QuestionText>
        </Styled.SignUpForm>
    );
};

export default SingUpForm;
