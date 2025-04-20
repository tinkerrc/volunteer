import { Cert, VolunteerService } from '@/proto/api/v1/api_pb';
import { transport } from '@/utils/client';
import { useAuth0 } from '@auth0/auth0-react';
import { createClient } from '@connectrpc/connect';
import { Group, ScrollArea, Table, Text } from '@mantine/core';
import cx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import classes from './CertList.module.css';

export function CertList() {
    let initState: string[] = [];
    const [selection, setSelection] = useState(initState);
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [certs, setCerts] = useState<Cert[]>([])
    const client = useMemo(() => createClient(VolunteerService, transport), [VolunteerService]);
    useEffect(() => {
        const getCerts = async () => {
            try {
                if (!isAuthenticated) {
                    return
                }
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: "https://api.yolovms.org",
                        scope: "read:current_user",
                    },
                });
                const headers = new Headers();
                headers.set("Authorization", `Bearer ${accessToken}`)
                const { certs } = await client.listCerts({ pageNumber: 0, pageSize: 50 })
                setCerts(certs)
            } catch (err) {
                console.log(err)
            }
        }
    }, [isAuthenticated])

    const rows = certs.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
                <Table.Td>
                    <Group gap="sm">
                        <Text size="sm" fw={500}>
                            {item.name}
                        </Text>
                    </Group>
                </Table.Td>
                <Table.Td>{item.description}</Table.Td>
            </Table.Tr>
        );
    });

    return (
        <ScrollArea>
            <Table miw={800} verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Description</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}