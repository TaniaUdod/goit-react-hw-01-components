import styled from 'styled-components';

export const TransactionTable = styled.table`
    margin: 0 auto 70px;
    width: 700px;
    text-align: center;
    border-collapse: collapse;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead`
    background-color: #6eb0fc;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #dde3e6;
    }
`;

export const Th = styled.th`
    border: 1px solid #141414;
    padding: 10px;
    width: calc(100% / 3);
`;

export const Tbody = styled.tbody`
    font-size: 16px;
`;

export const Td = styled.td`
    border: 1px solid black;
    padding: 10px; 
    width: calc(100% / 3);
    &:first-child {
        text-transform: capitalize;
    }
`;