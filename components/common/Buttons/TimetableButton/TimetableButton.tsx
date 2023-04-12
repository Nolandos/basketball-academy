import {ChevronRight} from '@mui/icons-material';
import Button from '@/components/common/Buttons/Button/Button';
import React from 'react';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';

const TimetableButton = () => {
    const {t} = useTranslation();
    const router = useRouter();
    const {timetable} = urls;

    return (
        <Button
            variant="OUTLINED"
            onClickHandler={() => router.push(timetable)}
            iconEnd={<ChevronRight />}
        >
            {t('common:timetableButton')}
        </Button>
    );
};

export default TimetableButton;
