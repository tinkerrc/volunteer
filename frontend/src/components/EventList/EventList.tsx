import { Event } from '@/proto/api/v1/api_pb';
import { useClient } from '@/utils/client';
import { intervalToString } from '@/utils/protobuf';
import { useAuth0 } from '@auth0/auth0-react';
import { Group, ScrollArea, Table, Text } from '@mantine/core';
import cx from 'clsx';
import { useEffect, useState } from 'react';
import classes from './EventList.module.css';

export function EventList() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [events, setEvents] = useState<Event[]>([])
    let initState: string[] = [];
    const [selection, setSelection] = useState(initState);
    useEffect(() => {
        const getEvents = async () => {
            try {
                if (!isAuthenticated) {
                    setEvents([])
                    return
                }
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: `https://api.yolovms.org/`,
                        scope: "read:current_user",
                    },
                });
                const headers = new Headers();
                headers.set("Authorization", `Bearer ${accessToken}`)
                const res = await useClient().listEvents({ pageNumber: 1, pageSize: 50 }, { headers })
                setEvents(res.events)
            } catch (err) {
                console.log(err)
            }
        }
        getEvents()
    })
    const rows = events.map((item) => {
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
                <Table.Td>{intervalToString(item.interval!)}</Table.Td>
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
                        <Table.Th>Date</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}