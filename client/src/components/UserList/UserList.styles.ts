import styled from 'styled-components';

export const Container = styled.div`
    padding: ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 3}px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;
    p {
        margin: 0;
    }
`;

export const UserName = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: 'VT323', monospace;
    font-size: 20px;
`;

export const Message = styled.p`
    color: ${({ theme }) => theme.colors.gray};
`;
