import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import {
    IconCalendarStats,
    IconCertificate,
    IconClipboardCheck,
    IconHome2,
    IconLogout,
    IconSwitchHorizontal,
    IconUser
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon size={20} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const navData = [
    { icon: IconCalendarStats, label: 'Events', to: '/events' },
    { icon: IconUser, label: 'Volunteers', to: '/volunteers' },
    { icon: IconClipboardCheck, label: 'Training', to: '/training' },
    { icon: IconCertificate, label: 'Certifications', to: '/certs' },
];

export function Navbar() {
    const [active, setActive] = useState(0);

    let navigate = useNavigate()
    const links = navData.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => { setActive(index); navigate(link.to) }}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                <MantineLogo type="mark" size={30} />
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
        </nav>
    );
}