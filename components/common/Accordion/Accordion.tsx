import React, {FC, ReactNode} from 'react';
import {ExpandMore} from '@mui/icons-material';
import * as Styled from './Acordion.styles';

type AccordionsProps = {
    items:
        | Array<{
              id: string;
              header: string | ReactNode;
              content: string | ReactNode;
          }>
        | [];
};
const Accordions: FC<AccordionsProps> = ({items, ...props}) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.ChangeEvent<object>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Styled.Accordions {...props}>
            {items.map(({id, header, content}) => (
                <Styled.Accordion
                    key={id}
                    expanded={expanded === id}
                    onChange={handleChange(id)}
                >
                    <Styled.AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={`panel-${id}-content`}
                        id={`panel-${id}-header`}
                    >
                        <h2>{header}</h2>
                    </Styled.AccordionSummary>
                    <Styled.AccordionDetails>{content}</Styled.AccordionDetails>
                </Styled.Accordion>
            ))}
        </Styled.Accordions>
    );
};

export default Accordions;
