import styled from 'styled-components';

export const Container = styled.div`
    padding: ${({ theme }) => theme.spacing * 3}px ${({ theme }) => theme.spacing * 5}px;
    display: grid;
    grid-template-columns: 4fr 8fr;
`;
