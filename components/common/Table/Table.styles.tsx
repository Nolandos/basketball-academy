import styled from 'styled-components';
import {
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableCell,
    TableContainer,
    TableHead as MuiTableHead,
    TableRow,
} from '@mui/material';

export const Container = styled(TableContainer)``;
export const Table = styled(MuiTable)`
    border-collapse: separate;
    border-spacing: 0 8px;
`;
export const TableHead = styled(MuiTableHead)`
    background-color: ${({theme}) =>
        theme.palette.basketballAcademy.fontGraySecond};
    height: 40px;
`;
export const TableHeadRow = styled(TableRow)``;
export const TableHeadCell = styled(TableCell)`
    min-width: 40px;
    padding-left: 28px;
    text-align: left;
    font-weight: 500;
    color: ${({theme}) => theme.palette.basketballAcademy.white};
`;
export const TableBody = styled(MuiTableBody)``;
export const TableBodyRow = styled(TableRow)`
    height: 77px;

    &:nth-of-type(even) {
        background-color: #f9f9f9;
    }
`;
export const TableBodyCell = styled(TableCell)`
    font-weight: 400;
    text-align: left;
    min-width: 150px;
    padding-left: 28px;
    border: 1px solid #cccccc;
`;
