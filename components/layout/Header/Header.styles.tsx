import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {widescreenOnly, desktopOnly, desktop, touch, mobileSmall} = device;

export const Header = styled.header`
    height: 100px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1001;
    background-color: ${({theme}) => theme.palette.basketballAcademy.white};
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    max-width: 1410px;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    @media ${widescreenOnly} {
        justify-content: center;
    }

    @media ${desktopOnly} {
        justify-content: center;
    }

    @media ${touch} {
        padding: 0 59px;
        background-color: ${({theme}) => theme.palette.basketballAcademy.white};
    }

    @media ${mobileSmall} {
        padding: 0 35px;
    }
`;

export const Logo = styled.div`
    cursor: pointer;
    height: 100%;
    width: 230px;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        height: auto;
    }

    @media ${widescreenOnly} {
        width: 150px;
    }
    @media ${desktopOnly} {
        width: 120px;
    }
    @media ${mobileSmall} {
        width: 150px;
    }
`;

export const Menu = styled.nav<{isOpen: boolean}>`
    @keyframes expandMobile {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @media ${touch} {
        position: ${({isOpen}) => isOpen && 'fixed'};
        display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        min-height: 280px;
        top: ${({isOpen}) => (isOpen ? '100px' : '-100vh')};
        left: 0;
        background: white;
        animation-name: expandMobile;
        animation-duration: 0.15s;
        z-index: -1;
    }
`;
export const MenuList = styled.ul`
    list-style-type: none;
    width: 100%;
    height: 100%;
    max-height: 100px;
    padding: 0;
    display: flex;
    margin: 0 0 0 20px;

    @media ${touch} {
        flex-direction: column;
        padding: 0 59px;
        max-height: none;
        z-index: -1;
        margin-left: 0;
    }

    @media ${mobileSmall} {
        padding: 0 35px;
    }
`;

export const MenuItem = styled.li<{hasItems: boolean; isExpand: boolean}>`
    position: relative;
    height: 100%;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    min-width: 80px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    padding: 0 10px;
    border-bottom: ${({theme}) =>
        `4px solid ${theme.palette.basketballAcademy.transparent}`};
    transition: border-bottom-color 0.2s ease-out;

    svg {
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
        transition: transform 0.2s ease-out;
    }

    &:hover {
        border-bottom: ${({theme, hasItems}) =>
            !hasItems &&
            `4px solid ${theme.palette.basketballAcademy.primaryGreen}`};
        transition: border-bottom-color 0.2s ease-out;

        .dropdown-menu {
            border-top: ${({theme}) =>
                `4px solid ${theme.palette.basketballAcademy.primaryGreen}`};
            transition: border-bottom-color 0.2s ease-out;
        }

        svg {
            transform: rotate(180deg);
            transition: transform 0.2s ease-out;
        }
    }

    @media ${widescreenOnly} {
        max-width: 110px;
    }

    @media ${desktopOnly} {
        max-width: 100px;
        margin-right: 5px;
    }
    @media ${touch} {
        height: ${({isExpand, hasItems}) =>
            isExpand && hasItems ? 'auto' : '45px'};
        margin-top: ${({isExpand, hasItems}) =>
            isExpand && hasItems ? '11.25px' : '0'};
        padding: 0;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: ${({theme}) =>
            `1px solid ${theme.palette.basketballAcademy.borderGray}`};
        color: ${({theme}) => theme.palette.basketballAcademy.fontGray};

        &:last-child,
        &:last-child:hover {
            border-bottom: none;
        }

        > svg,
        > span {
            margin-bottom: ${({isExpand, hasItems}) =>
                isExpand && hasItems ? '11.25px' : '0'};
        }

        .dropdown-menu {
            border-top: ${({theme}) =>
                `1px solid ${theme.palette.basketballAcademy.borderGray}`};
        }

        &:hover {
            border-bottom: ${({theme}) =>
                `1px solid ${theme.palette.basketballAcademy.borderGray}`};

            .dropdown-menu {
                border-top: ${({theme}) =>
                    `1px solid ${theme.palette.basketballAcademy.borderGray}`};
            }

            svg {
                transform: ${({isExpand}) =>
                    isExpand ? 'rotate(90deg)' : 'none'};
            }
        }

        svg {
            transform: ${({isExpand}) => isExpand && 'rotate(90deg)'};
        }
    }
`;

export const DropdownMenu = styled.ul`
    @keyframes expand {
        from {
            height: 0;
            opacity: 0;
        }

        to {
            height: 100%;
            opacity: 1;
        }
    }

    @keyframes expandMobile {
        from {
            height: 0;
            opacity: 0;
        }

        to {
            height: auto;
            opacity: 1;
        }
    }
    position: absolute;
    width: 255px;
    top: 96px;
    min-height: 50px;
    background-color: white;
    animation-name: expand;
    animation-duration: 0.15s;
    list-style-type: none;
    padding: 15px 0;
    margin: 0;
    overflow-y: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    @media ${touch} {
        padding: 0 0 0 35px;
        animation-name: expandMobile;
        animation-duration: 0.15s;
        position: relative;
        top: 0;
        width: 100%;
        box-shadow: none;
    }
`;

export const DropdownMenuItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 3px;

    > a {
        padding: 3px 26px;
        width: 100%;
        min-height: 31px;
        display: inline-block;
        position: relative;
        color: ${({theme}) => theme.palette.basketballAcademy.fontGray};
        font-weight: 400;
        text-transform: none;

        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 4px;
            background-color: ${({theme}) =>
                theme.palette.basketballAcademy.primaryGreen};
            left: 0;
            transform: scale(0);
            transition: transform 0.3s ease-in-out;
        }

        &:hover {
            color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};

            &::before {
                transform: scale(1);
            }
        }

        @media ${touch} {
            text-transform: uppercase;
            font-weight: 600;
            min-height: 44px;
            padding: 0;
            border-bottom: ${({theme}) =>
                `1px solid ${theme.palette.basketballAcademy.borderGray}`};
            display: flex;
            align-items: center;

            &::before {
                display: none;
            }
        }
    }

    @media ${touch} {
        &:last-child {
            > a {
                border-bottom: none;
            }
        }
    }
`;

export const Mobile = styled.div`
    position: absolute;
    right: 47px;
    display: flex;
    height: 100%;
    align-items: center;
    @media ${desktop} {
        display: none;
    }
    @media ${touch} {
        right: 61px;
    }
`;
export const HamburgerButton = styled.button<{isOpen: boolean}>`
    background: transparent;
    border: none;
    cursor: pointer;
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    > div {
        width: 25px;
        height: 4px;
        background-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
        margin: 2px 0;
        transition: 0.4s;

        &:first-child {
            transform: ${({isOpen}) =>
                isOpen && `rotate(-45deg) translate(-4px, 4px)`};
        }

        &:nth-child(2) {
            opacity: ${({isOpen}) => isOpen && 0};
        }

        &:last-child {
            transform: ${({isOpen}) =>
                isOpen && `rotate(45deg) translate(-7px, -8px)`};
        }
    }
`;
