import { PageLogo } from "../PageLogo";
import { Container, Button } from "./Navbar.styles";

export function Navbar() {
    return (
        <Container>
            <div>
                <PageLogo fontSize="36px" />
                <div>
                    <Button>My profile</Button>
                    <Button>Logout</Button>
                </div>
            </div>
        </Container>
    )
}
