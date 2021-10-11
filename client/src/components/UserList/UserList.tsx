import { Container, UserName, Message, Image } from './UserList.styles';
export function UserList() {
    return (
        <Container>
            <Image></Image>
            <div>
                <UserName>@sam-sepiol</UserName>
                <Message>Hello!</Message>    
            </div>
        </Container>
    )
}
