import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 64px;
`;

export const Title = styled.h1`
    font-family: 'VT323', monospace;
    color: #FFFFFF;
    font-size: 50px;
    margin: 0;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    padding: 0 64px;
    height: 44px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    background-color: #FCA311;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Input = styled.input`
    height: 44px;
    border: none;
    padding: none;
    width: 300px;
    box-sizing: border-box;
    padding: 0 12px;
    margin: 32px 0;
    cursor: pointer;
    outline: none;
`;
