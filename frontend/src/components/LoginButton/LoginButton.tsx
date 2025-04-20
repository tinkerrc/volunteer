import { Tooltip, UnstyledButton } from '@mantine/core';
import { useAuth0 } from '@auth0/auth0-react';
import { IconSwitchHorizontal } from '@tabler/icons-react';
import classes from '../Nav/Nav.module.css';

interface LoginButtonProps {
  active?: boolean;
}

// 🔹 Correctly typed login handler
function performLogin(loginWithRedirect: (options: { authorizationParams: { redirect_uri: string } }) => Promise<void>) {
  const redirectUri = window.location.origin;
  console.log('Redirecting to:', redirectUri);

  return loginWithRedirect({
    authorizationParams: {
      redirect_uri: redirectUri,
    },
  });
}

export function LoginButton({ active }: LoginButtonProps) {
  const { loginWithRedirect } = useAuth0();

  return (
    <Tooltip label="Switch account" position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={() => performLogin(loginWithRedirect)}
        className={classes.link}
        data-active={active || undefined}
      >
        <IconSwitchHorizontal size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}
