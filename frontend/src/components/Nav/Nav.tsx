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
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import classes from './Nav.module.css';
import { LoginButton } from '@/components/LoginButton/LoginButton';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
  to: string;
}

function NavbarLink({ icon: Icon, label, active, onClick, to }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <NavLink to={to}>
        <UnstyledButton
          onClick={onClick}
          className={classes.link}
          data-active={active || undefined}
        >
          <Icon size={20} stroke={1.5} />
        </UnstyledButton>
      </NavLink>
    </Tooltip>
  );
}

const navData = [
  { icon: IconCalendarStats, label: 'Events', to: '/events' },
  { icon: IconUser, label: 'Volunteers', to: '/volunteers' },
  { icon: IconClipboardCheck, label: 'Training', to: '/training' },
  { icon: IconCertificate, label: 'Certifications', to: '/certs' }
];

export function Nav() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const links = navData.map((link, index) => {
    const isVolunteers = link.to === '/volunteers';

    const handleClick = async () => {
      setActive(index);

      if (isVolunteers && !isAuthenticated) {
        await loginWithRedirect({
          authorizationParams: {
            redirect_uri: window.location.origin + '/volunteers',
          },
        });
      } else {
        navigate(link.to);
      }
    };

    return (
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={handleClick}
      />
    );
  });

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

            <Stack justify="center" gap={0} mb="md">
            <LoginButton />
                <NavbarLink icon={IconLogout} label="Logout" to="/logout" />
            </Stack>
        </nav>
    );
}