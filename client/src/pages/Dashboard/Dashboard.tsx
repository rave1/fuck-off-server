import { Navbar } from "../../components/Navbar";
import { UserList } from "../../components/UserList";
import { PageContainer } from "../Pages.styles";
import { Container } from "./Dashboard.styles";

export function Dashboard() {
    return (
        <PageContainer>
            <Navbar />
            <Container>
                <div>
                    <UserList />
                    <UserList />
                    <UserList />
                </div>
                <div>Chat</div>
            </Container>
        </PageContainer>
    )
}
