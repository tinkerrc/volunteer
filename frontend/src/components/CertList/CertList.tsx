import { useClient } from '@/utils/client';
import { Group, ScrollArea, Table, Text } from '@mantine/core';
import cx from 'clsx';
import { useState } from 'react';
import { useAsync } from 'react-use';
import classes from './EventList.module.css';

export function CertList() {
    let initState: string[] = [];
    const [selection, setSelection] = useState(initState);
    const state = useAsync(async () => {
        const res = await useClient().listCerts({ pageNumber: 1, pageSize: 50 })
        return res.certs
    }, [])

    const rows = state?.value?.map((item) => {
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