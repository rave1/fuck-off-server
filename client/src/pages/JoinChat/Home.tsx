import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { 
    Container, 
    Title, 
    Button, 
    Input, 
    Label,
    FlexWrapper
} from './Home.styles';

export function Home() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const buttonRef = useRef(null);

    const joinRoom = () => {
        if (value) {
            setIsLoading(true);
            setTimeout(() => {
                return history.push(`/room/${value}/`);
            }, 2000)
        }
    }

    const handleEnterClick = (e: any) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (buttonRef && buttonRef.current) {
                // @ts-ignore
                buttonRef.current.focus();
            }
            return joinRoom();
        }
    }

    useEffect(() => {
        setIsLoading(false);
    }, [])
    return (
        <Container>
            <Title>Fuck you CHAT!</Title>
            <Label>Enter chat name: </Label>
            <Input 
                type="text" 
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
                placeholder="e.g. fuckyou"
                onKeyDown={handleEnterClick}
            />
            <FlexWrapper>
                <Button ref={buttonRef} onClick={joinRoom}>{isLoading ? 'Loading...' : 'Join'}</Button>
            </FlexWrapper>
        </Container>
    )
}
