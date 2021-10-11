import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { ChatProps } from "./Chat.interface";
import { Container, ChatFooter, ChatHeader } from "./Chat.styles";

export function Chat({ roomName }: ChatProps) {
    const { authToken } = useAuth();
    const [socket, setSocket] = useState<any>(null);
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<any>([])

    const updateMessages = (newMessage: any) => {
        setMessages((prev: any) => [...prev, newMessage.message]);
    }

    useEffect(() => {
        if (roomName && authToken) {
            axios.get('http://127.0.0.1:8000/auth/messages/', {
                headers: {
                    Authorization: `Token ${authToken}`
                }
            })
            .then((res: any) => {
                const oldMessages: any = res.data;
                setMessages([...oldMessages])
            })
            .finally(() => {
                const webSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/?token=${authToken}`)
                setSocket(webSocket);
            })
        }
    }, [roomName, authToken])

    useEffect(() => {
        if (socket) {
            socket.onmessage = (e: any) => {
                const data = JSON.parse(e.data);
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
    return (
        <Container>
            {roomName
                ?
                    <>
                        <ChatHeader>
                            <span>@sam-sepiol</span>
                            <button>Leave chat</button>
                        </ChatHeader>
                        <div className="scroll">
                            {messages.length > 0 
                                ? messages.map((each: any, index: number) => (
                                    <p key={index}>
                                        {each.author}<br/>
                                        {each.message}
                                    </p>
                                ))
                                : <p>No messages...</p>
                            }
                        </div>
                        <ChatFooter>
                            <input 
                                type="text" 
                                onChange={(e) => setValue(e.target.value)} 
                                value={value} 
                                placeholder="Message"
                                onKeyDown={handleEnterClick}
                            />
                            <button onClick={submitMessage}>Send</button>
                        </ChatFooter>
                    </>
                :
                    <p>No room selected.</p>
            }
        </Container>
    )
}
