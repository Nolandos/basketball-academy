import {useTranslation} from 'next-i18next';
import React, {FC} from 'react';
import Slider from 'react-slick';
import {
    ChevronRight,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';
import {NewsType} from '@/utils/commonTypes';
import Button from '@/components/common/Buttons/Button/Button';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';
import {reverse} from 'named-urls';
import * as Styled from './LastNewsGallery.styles';

type LastNewsGalleryProps = {
    lastNews: Array<NewsType>;
    lastNewsLoading: boolean;
};

const LastNewsGallery: FC<LastNewsGalleryProps> = ({
    lastNews,
    lastNewsLoading,
}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const {news} = urls;

    const renderDotsList = (dots: number) => (
        <Styled.Dots>
            <ul>{dots}</ul>
        </Styled.Dots>
    );
    const renderDots = () => <Styled.Dot />;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <Styled.NextArrow>
                <KeyboardArrowRight />
            </Styled.NextArrow>
        ),
        prevArrow: (
            <Styled.PrevArrow>
                <KeyboardArrowLeft />
            </Styled.PrevArrow>
        ),
        appendDots: renderDotsList,
        customPaging: renderDots,
    };

    return (
        <Styled.Container>
            <Slider {...settings}>
                {lastNewsLoading && <Styled.LastNewsLoader />}
                {!lastNewsLoading &&
                    lastNews?.map(
                        ({id, attributes: {title, mainPhoto, slug}}) => {
                            const photoUrl: string =
                                `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${mainPhoto?.data?.attributes.url}` ||
                                '';
                            return (
                                <Styled.NewsSingleItem
                                    key={id}
                                    background={photoUrl}
                                >
                                    <Styled.ItemContainer>
                                        <h2>{title}</h2>
                                        <Styled.NewsButtonWrapper>
                                            <Button
                                                iconEnd={<ChevronRight />}
                                                onClickHandler={() =>
                                                    router.push(
                                                        reverse(
                                                            news.detail.show,
                                                            {
                                                                slug,
                                                            }
                                                        )
                                                    )
                                                }
                                            >
                                                {t('common:more')}
                                            </Button>
                                            <Styled.NewsButton
                                                variant="OUTLINED"
                                                iconEnd={<ChevronRight />}
                                                onClickHandler={() =>
                                                    router.push(news.all)
                                                }
                                            >
                                                {t('common:news')}
                                            </Styled.NewsButton>
                                        </Styled.NewsButtonWrapper>
                                    </Styled.ItemContainer>
                                </Styled.NewsSingleItem>
                            );
                        }
                    )}
            </Slider>
        </Styled.Container>
    );
};
export default LastNewsGallery;
