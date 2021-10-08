import styled, { keyframes } from 'styled-components';
import { PageLogoStyleProps } from './PageLogo.interface';

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blinkCaret = keyframes`
    from, to { border-color: #000000 }
    50% { border-color: #FCA311 }
`;

export const Title = styled.span<PageLogoStyleProps>`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ fontSize }) => fontSize};
    margin: 0;
    position: relative;
    border-right: 10px solid ${({ theme }) => theme.colors.orange};
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 10px;
    animation: ${typing} 3.5s steps(40, end), ${blinkCaret} .75s step-end infinite;
    text-shadow: 6px -4px ${({ theme }) => theme.colors.orange};
    font-family: 'VT323', monospace;
`;
