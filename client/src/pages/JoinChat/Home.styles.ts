import styled, { keyframes } from 'styled-components';

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blinkCaret = keyframes`
    from, to { border-color: #000000 }
    50% { border-color: #FCA311 }
`;

export const Container = styled.div`
    background-color: #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 494px;
    height: 302px;
    padding: 32px;
    box-sizing: border-box;
    font-family: 'VT323', monospace;
`;

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 50px;
    margin: 0;
    position: relative;
    border-right: 10px solid #FCA311;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 10px;
    animation: ${typing} 3.5s steps(40, end), ${blinkCaret} .75s step-end infinite;
    text-shadow: 6px -4px #FCA311;
`;

const loading = keyframes`
    0% {
        width: 180px;
        height: 44px;
        right: 32px;
        bottom: 32px;
    }
    100% {
        width: 494px;
        height: 302px;
        right: 0;
        bottom: 0;
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    padding: 0;
    width: 180px;
    height: 44px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    background-color: #FCA311;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 10px;
    font-family: 'VT323', monospace;
    &:hover {
        background-color: #FFFFFF;
        color: #FCA311;
    }
    &:focus {
        position: absolute;
        animation: ${loading} .2s ease-in-out forwards;
        background-color: #FFFFFF;
        color: #FCA311;
    }
`;

export const Input = styled.input`
    height: 44px;
    border: none;
    padding: none;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0 0 32px;
    cursor: text;
    outline: none;
    background-color: #000000;
    color: #E5E5E5;
    font-weight: bold;
    font-size: 24px;
    font-family: 'VT323', monospace;
    border-bottom: 2px solid #FFFFFF;
    &::placeholder {
        color: #E5E5E5;
        text-transform: uppercase;
    }
`;

export const Label = styled.p`
    margin: 32px 0 16px;
    color: #FFFFFF;
    font-size: 20px;
`;

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
