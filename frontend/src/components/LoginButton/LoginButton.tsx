import { Button, Tooltip, UnstyledButton } from '@mantine/core';
import { useAuth0 } from '@auth0/auth0-react';
import { IconSwitchHorizontal } from '@tabler/icons-react';
import classes from '../Nav/Nav.module.css';

export function LoginButton({active}:{active?:boolean}) {
  const { loginWithRedirect } = useAuth0();

  return (
    <Tooltip label="Switch account" position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={() => loginWithRedirect()} className={classes.link} data-active={active || undefined}>
            <IconSwitchHorizontal size={20} stroke={1.5} />
        </UnstyledButton>
    </Tooltip>
  );
}
