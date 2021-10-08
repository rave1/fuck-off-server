import { PageLogo } from "../PageLogo";
import { Container } from "./Navbar.styles";

export function Navbar() {
    return (
        <Container>
            <div>
                <PageLogo fontSize="36px" />
                <div>
                    <button>My profile</button>
                    <button>Logout</button>
                </div>
            </div>
        </Container>
    )
}
