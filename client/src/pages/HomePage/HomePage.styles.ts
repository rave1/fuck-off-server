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
    width: 90vw;
    height: 90vh;
    background-color: #000000;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 100px;
    margin: 0;
    position: relative;
    border-right: 10px solid #FCA311;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 10px;
    animation: ${typing} 3.5s steps(40, end), ${blinkCaret} .75s step-end infinite;
    text-shadow: 6px -4px #FCA311;
    font-family: 'VT323', monospace;
    `;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`;

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 260px;
    grid-template-rows: repeat(4, 44px);
    grid-row-gap: 16px;
    > input {
        border: none;
        padding: none;
        box-sizing: border-box;
        padding: 0;
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
    }
    .error {
        color: red;
        display: block;
        text-align: center;
        font-weight: bold;
        line-height: 44px;
    }
`;

export const Button = styled.button`
    font-family: 'VT323', monospace;
    font-size: 24px;
    border: 2px solid #FFFFFF;
    background-color: unset;
    color: #E5E5E5;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #FCA311;
        color: #FFFFFF;
        border: 2px solid #FCA311;
    }
`;

export const Footer = styled.div`
    margin-top: 64px;
    display: grid;
    grid-template-columns: 260px;
    grid-template-rows: auto 44px;
    grid-row-gap: 16px;
    > span {
        display: block;
        text-align: center;
    }
`;

export const ActionTypeTitle = styled.span`
    text-align: center;
    display: block;
    margin-bottom: 32px;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'VT323', monospace;
`;