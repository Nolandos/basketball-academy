import {ChevronRight} from '@mui/icons-material';
import Button from '@/components/common/Buttons/Button/Button';
import React from 'react';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';

const SignUpButton = () => {
    const {t} = useTranslation();
    const router = useRouter();
    const {applicationForm} = urls;

    return (
        <Button
            onClickHandler={() => router.push(applicationForm)}
            iconEnd={<ChevronRight />}
        >
            {t('common:signUp')}
        </Button>
    );
};

export default SignUpButton;
