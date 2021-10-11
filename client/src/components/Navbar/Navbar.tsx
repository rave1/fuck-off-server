import { useHistory } from "react-router-dom";
import { PageLogo } from "../PageLogo";
import { Container, Button } from "./Navbar.styles";

export function Navbar() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('token');
        return history.push('/logout/');
    };
    
    return (
        <Container>
            <div>
                <PageLogo fontSize="36px" />
                <div>
                    <Button>My profile</Button>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
        </Container>
    )
}
