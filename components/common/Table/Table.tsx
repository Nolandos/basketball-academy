import React, {FC} from 'react';
import {TableDataTypes} from '@/utils/commonTypes';
import * as Styled from './Table.styles';

const Table: FC<TableDataTypes> = ({tableData, ...props}) => {
    const {tableHeadData, tableBodyData} = tableData;

    return (
        <Styled.Container {...props}>
            <Styled.Table>
                <Styled.TableHead>
                    <Styled.TableHeadRow>
                        {tableHeadData.map(
                            ({id, name, style, hidden}) =>
                                !hidden && (
                                    <Styled.TableHeadCell
                                        style={style && style}
                                        key={id}
                                    >
                                        {name}
                                    </Styled.TableHeadCell>
                                )
                        )}
                    </Styled.TableHeadRow>
                </Styled.TableHead>
                <Styled.TableBody>
                    {tableBodyData.map((row) => (
                        <Styled.TableBodyRow key={row.id}>
                            {Object.entries(row).map(([key, value]) => {
                                const columnHidden: boolean =
                                    tableHeadData.find(({id}) => id === key)
                                        ?.hidden || false;
                                return (
                                    !columnHidden && (
                                        <Styled.TableBodyCell
                                            key={key}
                                            component="th"
                                            scope="row"
                                        >
                                            {value}
                                        </Styled.TableBodyCell>
                                    )
                                );
                            })}
                        </Styled.TableBodyRow>
                    ))}
                </Styled.TableBody>
            </Styled.Table>
        </Styled.Container>
    );
};

export default Table;
