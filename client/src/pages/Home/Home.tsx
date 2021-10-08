import { useState } from 'react';
import { useHistory } from 'react-router';

export function Home() {
    const history = useHistory();
    const [value, setValue] = useState('');

    const handleClick = () => {
        if (value) {
            return history.push(`/room/${value}/`);
        }
    }
    return (
        <div>
            <h1>Fuck you CHAT</h1>
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
            <button onClick={handleClick}>JOIN</button>
        </div>
    )
}