import { VolunteerService } from '@/proto/api/v1/api_pb';
import { transport } from '@/utils/client';
import { useAuth0 } from '@auth0/auth0-react';
import { createClient } from '@connectrpc/connect';
import { Button, Center, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface CreateVolunteerData {
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string;
    address: string;
}

export const CreateVolunteerForm = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate()

    const client = useMemo(() => createClient(VolunteerService, transport), [VolunteerService]);
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            address: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: (value) => (/^[\d]{10}$/.test(value) ? null : 'Invalid phone'),
        }
    })

    const submitForm = async (values: CreateVolunteerData) => {
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
            const { id } = await client.createVolunteer({ ...values }, { headers });
            if (id.length != 0) {
                navigate("/volunteers")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Center maw="400" mb="70" mt="70" bg="var(--mantine-color-gray-light)">
            <form onSubmit={form.onSubmit(submitForm)}>
                <TextInput withAsterisk label="Email" placeholder='your@email.com' key={form.key('email')} {...form.getInputProps('email')} />
                <TextInput withAsterisk label="First Name" placeholder='Jane' key={form.key('firstName')} {...form.getInputProps('firstName')} />
                <TextInput label="Middle Name" placeholder='Jane' key={form.key('middleName')} {...form.getInputProps('middleName')} />
                <TextInput withAsterisk label="Last Name" placeholder='Doe' key={form.key('lastName')} {...form.getInputProps('lastName')} />
                <TextInput withAsterisk label="Phone Number" placeholder='5556667788' key={form.key('phone')} {...form.getInputProps('phone')} />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Create</Button>
                </Group>
            </form>
        </Center>
    )
};
