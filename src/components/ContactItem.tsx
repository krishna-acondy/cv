import { Link, Stack, Typography } from "@mui/joy"
import { Phone } from "./Phone"
import { Email } from "./Email"
import { Address } from "./Address"
import { Website } from "./Website"
import { Github } from "./Github"
import { Linkedin } from "./Linkedin"

type ContactItemProps = {
    value: string
    type: 'email' | 'phone' | 'address' | 'website' | 'linkedin' | 'github'
}
export const ContactItem = ({ value, type}: ContactItemProps) => {
    const href = type === 'email' ? `mailto:${value}` : type === 'phone' ? `tel:${value}` : type === 'website' ? value : type === 'github' ? `https://github.com/${value}` : type === 'linkedin' ? `https://linkedin.com/in/${value}` : undefined
    const icon = type === 'email' ? <Email /> : type === 'phone' ? <Phone /> : type === 'address' ?  <Address /> : type === 'github' ? <Github /> : type === 'linkedin' ? <Linkedin /> : type === 'website' ? <Website /> : undefined
    return <Stack direction="row" gap={0.25} alignItems='center'>
        {icon}
        {!!href && <Link target='_blank' sx={{ textDecoration: 'none', color: t => t.palette.neutral[500]}} href={href}>{value}</Link>}
        {!href && <Typography fontWeight='md' sx={{ color: t => t.palette.neutral[500], }}>{value}</Typography>}
    </Stack>
}