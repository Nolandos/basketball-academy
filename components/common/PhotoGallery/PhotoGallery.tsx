import React, {FC, useCallback, useState} from 'react';
import {PhotoGalleryType} from '@/utils/commonTypes';
import Gallery from 'react-photo-gallery';
import Carousel, {Modal, ModalGateway} from 'react-images';
import * as Styled from './PhotoGallery.styles';

type PhotoGalleryProps = {
    photos: PhotoGalleryType[];
};

const PhotoGallery: FC<PhotoGalleryProps> = ({photos}) => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

    const openLightbox = useCallback(
        (event: React.MouseEvent, {index}: {index: number}) => {
            setCurrentImage(index);
            setViewerIsOpen(true);
        },
        []
    );
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Styled.Container>
            <Gallery photos={photos} onClick={openLightbox} />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Styled.Container>
    );
};

export default PhotoGallery;
