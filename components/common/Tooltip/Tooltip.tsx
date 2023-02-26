import React, {FC} from 'react';
import Popper, {PopperPlacementType} from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import {HelpOutline} from '@mui/icons-material';
import * as Styled from './Tooltip.styles';

type TooltipProps = {
    content: string;
    tooltipPlacement: 'right' | 'top' | 'left' | 'bottom';
    tooltipStyles?: object;
};

const defaultProps = {
    tooltipStyles: {},
};

const Tooltip: FC<TooltipProps> = ({
    content,
    tooltipPlacement,
    tooltipStyles,
}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();

    const handleClick =
        (newPlacement: PopperPlacementType) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setOpen((prev) => placement !== newPlacement || !prev);
            setPlacement(newPlacement);
        };
    return (
        <>
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
                style={{zIndex: 9999}}
            >
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Styled.Paper
                            style={tooltipStyles}
                            tooltipPlacement={tooltipPlacement}
                        >
                            <Typography>{content}</Typography>
                        </Styled.Paper>
                    </Fade>
                )}
            </Popper>
            <Styled.PopperButton
                type="button"
                onMouseEnter={handleClick(tooltipPlacement)}
                onMouseLeave={handleClick(tooltipPlacement)}
            >
                <HelpOutline fontSize="small" />
            </Styled.PopperButton>
        </>
    );
};

Tooltip.defaultProps = defaultProps;

export default Tooltip;
