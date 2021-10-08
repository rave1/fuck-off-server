import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { 
    Container, 
    Title,
    Button, 
    Input, 
    InputWrapper,
    MessagesWrapper,
    HeaderWrapper,
    StyledLink
} from './Room.styles';

export function Room() {
    const history = useHistory();
    const { name } = useParams<{name: string}>();
    const [socket, setSocket] = useState<any>(null);
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<any>([])

    const updateMessages = (newMessage: string) => {
        setMessages((prev: any) => [...prev, newMessage]);
    }

    useEffect(() => {
        if (name) {
            const webSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${name}/`)
            setSocket(webSocket);
        }
    }, [name])

    useEffect(() => {
        if (socket) {
            socket.onmessage = (e: any) => {
                const data = JSON.parse(e.data).message;
                updateMessages(data);
            }
        }
    }, [socket])

    const submitMessage = () => {
        if (value && socket) {
            socket.send(JSON.stringify({
                'message': value
            }));
            setValue('');
        }
    }

    const handleEnterClick = (e: any) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            return submitMessage();
        }
    }

    const leaveChat = () => {
        if (socket) {
            socket.close();
        }
        return history.push('/');
    }

    return (
        <Container>
            <HeaderWrapper>
                <Title>Room: {name && name}</Title>
                <StyledLink onClick={() => leaveChat()}>Leave chat</StyledLink>
            </HeaderWrapper>
            <MessagesWrapper>
                {messages.length > 0 
                    ? messages.map((each: any, index: number) => (
                        <p key={index}>{each}</p>
                    ))
                    : <p>No messages...</p>
                }
            </MessagesWrapper>
            <InputWrapper>
                <Input 
                    type="text" 
                    onChange={(e) => setValue(e.target.value)} 
                    value={value} 
                    placeholder="Message"
                    onKeyDown={handleEnterClick}
                />
                <Button onClick={submitMessage}>Send</Button>
            </InputWrapper>
        </Container>
    )
}
