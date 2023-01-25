import React, {BaseSyntheticEvent, FC, ReactNode, useState} from 'react';
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import Link from 'next/link';
import * as Styled from './MenuDropdown.styles';

type MenuDropdownProps = {
    title: string;
    children: ReactNode;
    url: string | null;
};

const MenuDropdown: FC<MenuDropdownProps> = ({
    title,
    children,
    url,
    ...props
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);
    const hasChildren = !!(!url && children);
    const handleClick: (event: BaseSyntheticEvent) => void = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose: () => void = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Styled.DropdownButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={hasChildren ? handleClick : undefined}
                variant="text"
                size="medium"
                {...props}
            >
                {hasChildren && title}
                {url && !hasChildren && <Link href={url}>{title}</Link>}
                {hasChildren && (isOpen ? <ArrowDropUp /> : <ArrowDropDown />)}
            </Styled.DropdownButton>
            <Styled.DropdownMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isOpen}
                onClose={hasChildren ? handleClose : undefined}
                onClick={hasChildren ? handleClose : undefined}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                {children}
            </Styled.DropdownMenu>
        </>
    );
};

export default MenuDropdown;
