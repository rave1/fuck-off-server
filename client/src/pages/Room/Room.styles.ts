import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 12px 12px;
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
    width: 180px;
    height: 44px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    background-color: #FCA311;
    text-transform: uppercase;;
`;

export const Input = styled.input`
    height: 44px;
    border: none;
    padding: none;
    width: 300px;
    box-sizing: border-box;
    padding: 0 12px;
    cursor: pointer;
    outline: none;
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
