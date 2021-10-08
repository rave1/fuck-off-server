import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 494px;
    height: 500px;
    padding: 32px;
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
    padding: 0;
    width: 180px;
    height: 44px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    background-color: unset;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 10px;
    font-family: 'VT323', monospace;
    box-sizing: border-box;
    border: 2px solid #FFFFFF;
    &:hover {
        border: 2px solid #FCA311;
        background-color: #FCA311;
        color: #FFFFFF;
    }
`;

export const Input = styled.input`
    height: 44px;
    border: none;
    padding: none;
    width: 100%;
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
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 180px;
    align-items: center;
`;

export const MessagesWrapper = styled.div`
    height: 400px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    > p {
        color: #FFFFFF;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLink = styled.span`
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;
    cursor: pointer;
`;
