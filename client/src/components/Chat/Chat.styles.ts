import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.gray};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 62px 1fr 62px;
    color: ${({ theme }) => theme.colors.black};
    .scroll {
        padding: 0 ${({ theme }) => theme.spacing * 3}px;
        overflow: hidden scroll;
    }
`;

export const ChatFooter = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 180px;
    > button {
        font-family: 'VT323', monospace;
        font-size: 24px;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.colors.orange};
        }
    }
    > input {
        border: none;
        padding: 0 12px;
        box-sizing: border-box;
        cursor: text;
        outline: none;
        font-weight: bold;
        font-size: 24px;
        font-family: 'VT323', monospace;
        &::placeholder {
            color: #E5E5E5;
            text-transform: uppercase;
        }
    }
`;

export const ChatHeader = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 180px;
    background-color: ${({ theme }) => theme.colors.white};
    > span {
        font-family: 'VT323', monospace;
        font-weight: bold;
        font-size: 24px;
        margin-left: ${({ theme }) => theme.spacing * 3}px;
        line-height: 62px;
    }
    > button {
        font-family: 'VT323', monospace;
        font-size: 24px;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.colors.orange};
        }
    }
`;