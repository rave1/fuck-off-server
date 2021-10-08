import { useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Title, Button, Input } from './Home.styles';

export function Home() {
    const history = useHistory();
    const [value, setValue] = useState('');

    const joinRoom = () => {
        if (value) {
            return history.push(`/room/${value}/`);
        }
    }

    const handleEnterClick = (e: any) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            return joinRoom();
        }
    }
    return (
        <Container>
            <Title>Fuck you CHAT</Title>
            <Input 
                type="text" 
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
                placeholder="Enter chat name"
                onKeyDown={handleEnterClick}
            />
            <Button onClick={joinRoom}>Join</Button>
        </Container>
    )
}
