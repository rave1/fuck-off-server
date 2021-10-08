import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Room() {
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

    const handleClick = () => {
        if (value && socket) {
            socket.send(JSON.stringify({
                'message': value
            }));
            setValue('');
        }
    }
    return (
        <div>
            <h1>Room {name && name}</h1>
            <div>
                {messages.length > 0 && messages.map((each: any, index: number) => (
                    <p key={index}>{each}</p>
                ))}
            </div>
            <div>
                <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                <button onClick={handleClick}>SEND</button>
            </div>
        </div>
    )
}