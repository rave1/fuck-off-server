import { PageLogoProps } from "./PageLogo.interface"
import { Title } from "./PageLogo.styles"

export function PageLogo({ fontSize = '36px' }: PageLogoProps) {
    return (
        <Title fontSize={fontSize}>Fuck you CHAT!</Title>
    )
}
