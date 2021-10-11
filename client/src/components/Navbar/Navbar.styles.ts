import styled from 'styled-components';

export const Container = styled.div`
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${({ theme }) => theme.spacing * 3}px ${({ theme }) => theme.spacing * 5}px;
    }
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
    margin-left: 16px;
    border: none;
    color: white;
    background-color: unset;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Fira Code', monospace;
`;
